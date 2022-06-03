import {createContext, useContext, useState } from 'react'

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
            totalPrice
        } } >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
