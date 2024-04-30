import { createContext, useReducer} from "react";

//Crear el contexto
export const CartContext= createContext();

//Inicializar el estado
//Modificar el estado incial para guarar el delm local storage
const initialState= JSON.parse(window.localStorage.getItem("cart")) || [];

export const updateLocalStorage=  state => {
    window.localStorage.setItem("cart", JSON.stringify(state))
}

const reducer = (state, action)=> {
    const { type:actionType , payload: actionPayload }= action;
    switch(actionType){
        case "ADD_TO_CART":{
            const {id}= actionPayload
            const productCartInIndex= state.findIndex( item=> item.id ===id)
              // Verificar si el producto esta en el carrito
        if(productCartInIndex >= 0){
            const newState =  structuredClone(state);

            newState[productCartInIndex].quantity +=1;
            updateLocalStorage(newState)
            return newState;
        }
        //si el producto no esta en el carrito
       const newState = [
            ...state,
                {
                ...actionPayload,
                quantity:1
                }
            ]
            updateLocalStorage(newState)
            return newState
        }
        case "REMOVE_FROM_CART":{
            const {id}= actionPayload
            const newState= state.filter(item=> item.id !=id)
            updateLocalStorage(newState);
            return newState;
        }
        case "CLEAR_CART":{
            const newState =[]
           updateLocalStorage(newState)
        return newState
        }
    }

    }

// Creamos el proveedor
export function CartProvider ({children}){
     const [state, dispatch] = useReducer(reducer,initialState);

     const addToCart = product => dispatch({
        type: "ADD_TO_CART",
        payload: product
     })
     const removeFromCart = product => dispatch({
        type: "REMOVE_FROM_CART",
        payload: product
     })
     const clearCart=() => dispatch ({
        type: "CLEAR_CART"
     })
    //  const addToCart= product =>{
    //     const productInCartIndex = cart.findIndex( item => item.id === product.id);

    //     // Verificar si el producto esta en el carrito
    //     if(productInCartIndex >= 0){
    //         const newCart =  structuredClone(cart);

    //         newCart[productInCartIndex].quantity +=1;
    //         return setCart(newCart);
    //     }

    //     // Si el producto no esta en el carrito
    
    //     setCart(prevState =>([
    //         ...prevState,
    //         {
    //         ...product,
    //         quantity: 1
    //         }
    //     ]))
     
    //  const removeFromCart = product =>{
    //     setCart( prevState => prevState.filter(item => item.id != product.id))
    //  }
    //  const clearCart = () => {
    //     setCart([])
    // }

    return (
        <CartContext.Provider value={{
            cart: state, 
            addToCart,
            removeFromCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}