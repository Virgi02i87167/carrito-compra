import { useContext } from "react";
import { CartContext } from "../context/cart";

//Creamos nuestro custom hook 

export const useCarts = () => {

    const context= useContext(CartContext);
    
    if(context === undefined){
        throw new Error("useCart must be used within a Cart Provider");
    }
    return context;
    
}
