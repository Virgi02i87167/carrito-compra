import "./Products.css";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";
import { useCarts } from "../hooks/useCarts";

export function Products({products}){
   
    const {addToCart, cart, removeFromCart} = useCarts()
    const checkProductInCart =product  =>{
        return cart.some((item) => item.id === product.id)
    }

    return(
        <main className="Products">
          
        <ul>
            {
                products.slice(0, 12).map((product)=> {
                
                    const isProductInCart = checkProductInCart(product);

                    return(
                        <li key={product.id}>
                        <img src={product.thumbnail} alt={product.title} />
                    <div>
                        <strong>{product.title} <br />$ {product.price}</strong>
                    
                    </div>
                    <div>
                    <button 
                    style={{backgroundColor : isProductInCart ? "red": "black"}}
                    onClick={() => {isProductInCart ? removeFromCart(product) : addToCart(product) }}>
                        {
                        isProductInCart ? <RemoveFromCartIcon/>: <AddToCartIcon/>
                        }
                    </button>
                       
                    </div>
                    </li>
    
                    )
                })
            }
        </ul>
        </main>
    )
};