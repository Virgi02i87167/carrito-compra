import { useId } from "react";
import { CartIcon,ClearCartIcon } from "./Icons";
import "./Cart.css"
import { useCarts } from "../hooks/useCarts";


function CartItem({thumbnail, title, price, quantity, addToCart}){
    return(
        <li>
        <img src={thumbnail} 
        alt={title} />
        <div>
            <strong>
                {title}
            </strong>- $ {price}
            <footer>
                <small>QTY: {quantity}</small>
            </footer>
            <button onClick={addToCart}>+</button>
        </div>
    </li>
    );
}

export function Cart(){
  const  cartCheckBoxId= useId();
const {cart, clearCart, addToCart}= useCarts();

const  cantProductos = cart.reduce(
    (total, product)=> total +  product.quantity, 0)

const totalPagar = cart.reduce((total, product) =>total + product.price * product.quantity, 0)
    
return(
        <>
        <label className="cart-button" htmlFor={cartCheckBoxId}>
            <CartIcon/>
        </label>
        <input type="checkbox"  id={cartCheckBoxId} hidden/>

        <aside className="cart">
        <ul>
         {
            cart.map(product => (
                <CartItem
                key={product.id}
                addToCart={()=> addToCart(product)}
                {...product}
                />
            ))
         }
        </ul>
        <p>Productos: {cantProductos}</p>
        <p>Total a pagar: ${totalPagar}</p>
        <button 
        style={{backgroundColor: "#E36414"}}
        onClick={clearCart}>
            <ClearCartIcon/>
        </button>
        </aside>
        </>
    )
}