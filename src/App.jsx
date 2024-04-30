import { useState } from "react";
import { Products } from "./components/Products";
import {products as initialProducts} from "./mocks/products.json";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { IS_DEVELOPMENT } from "./config.js";
import { useFilter } from "./hooks/useFilters.jsx";
import { Cart } from "./components/Cart.jsx";
import { CartProvider } from "./context/cart.jsx";

//Crear un custom hook para separar la logica de los filtros
{/*function useFilters(){
   const [filters, setfilters]=useState({
category:"all",
  minPrice:0
})  ;
}*/}
function App() {
const [products]= useState(initialProducts);

const{ FilterProducts}= useFilter();

const filteredProducts= FilterProducts(products);
return (
    <CartProvider>
    <Header />
    <Cart/>
    <Products products={filteredProducts}/>
  {IS_DEVELOPMENT && <Footer/>}
    </CartProvider>
  )
}

export default App;
