import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from 'firebase/firestore'
import { createContext, useContext, useState } from 'react'
import swal from 'sweetalert'

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

    const isInCart = (id) => cartList.some((product) => product.id === id)
    function addToCart(item) {
        if (isInCart(item.id)) {
            const index = cartList.findIndex((product) => product.id === item.id)
            cartList[index].quantity += item.quantity
            setCartList([...cartList])
        } else {
            setCartList([
                ...cartList,
                item
            ])
        }
    }

    /* Deleting the item from the cart. */
    const deleteItem = (id) => {
        const newCart = [...cartList];
        let i = newCart.findIndex((product) => product.id === id);
        newCart.splice(i, 1);
        setCartList([...newCart]);
    }

    const clearCart = () => {
        setCartList([])
    }

    /* It takes the data from the cart and sends it to the firestore database.*/
    async function buy(customerData) {
        /* Creating an object with the data that will be sent to the firestore database. */
        let order = {}
        order.buyer = customerData
        order.total = totalPrice()
        order.items = cartList.map(item => {
            const id = item.id
            const name = item.name
            const price = item.price
            const quantity = item.quantity

            return { id, name, price, quantity }
        })

        const db = getFirestore()
        const queryCollection = collection(db, "orders")
        addDoc(queryCollection, order)
        .then(res => swal("¡Compra finalizada!", `El id de su compra es "${res.id}"`, "success"))
        .catch(err => console.log(err))
        .finally((res) => { clearCart() })
        
        const queryCollectionStock = collection(db, 'items')
        const queryUpdateStock = query(queryCollectionStock, where(documentId(), 'in', cartList.map(item => item.id)))
        const batch = writeBatch(db)

        await getDocs(queryUpdateStock)
            .then(resp => resp.docs.forEach(
                res => batch.update(res.ref, {
                    stock: res.data().stock - cartList.find(item => item.id === res.id).quantity
                })
            ))
            .catch(err => console.log(err))
        batch.commit()
    }
    
    const totalQuantity = () => {
        return cartList.reduce((count, product) => (count += product.quantity), 0)
    }

    const totalPrice = () => {
        return cartList.reduce((count, product) => count += product.quantity * product.price, 0)
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            deleteItem,
            clearCart,
            totalQuantity,
            totalPrice,
            buy
        }} >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
