import { addDoc, collection, getFirestore } from 'firebase/firestore'
import {createContext, useContext, useState } from 'react'
import swal from 'sweetalert'

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)


const CartContextProvider = ({children}) =>{
    const [cartList, setCartList] = useState([])

    const isInCart=(id)=> cartList.some((product)=>product.id===id)
    function addToCart(item) {
        if (isInCart(item.id)) {
            const index= cartList.findIndex((product)=>product.id===item.id)
            cartList[index].cantidad+= item.cantidad
            setCartList([...cartList])
        }else{
            setCartList( [
                ...cartList,
                item
            ] )
        }
    }

    const deleteItem =(id)=> {
        const newCart = [...cartList];
        let i = newCart.findIndex((product) => product.id === id);
        newCart.splice(i, 1);
        setCartList([...newCart]);
    }
    
    const clearCart = () => {
        setCartList([])
    }

    const buy = ()=>{
        let order={}
        order.buyer={ name: 'Franco', email:'franco@gmail.com', phone:'15647479'}
        order.total= totalPrice()
        order.items = cartList.map(item=>{
            const id =item.id
            const name= item.name
            const price = item.price

            return{id, name, price}
        })
        const db = getFirestore()
        const queryCollection = collection(db,"orders")
        addDoc(queryCollection, order)
        .then(res=> swal("¡Compra finalizada!", `El id de su compra es "${res.id}"`, "success"))
        .catch(err=>console.log(err))
        .finally((res)=>{clearCart()})    
    }

    const totalQuantity=()=>{
        return cartList.reduce((count, product)=> (count += product.cantidad) ,0)
    }

    const totalPrice=()=>{
        return cartList.reduce((count, product)=> count+=product.cantidad * product.price ,0)
    }

    return (
        <CartContext.Provider value={ {
            cartList,
            addToCart,
            deleteItem,
            clearCart,
            totalQuantity,
            totalPrice,
            buy
        } } >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
