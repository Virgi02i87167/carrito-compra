import { useCarts } from "../hooks/useCarts";
import { useFilter } from "../hooks/useFilters"
import "./Footer.css"

export function Footer(){
    const {filters}= useFilter();
    const {cart}= useCarts();
    return(
        <footer className="footer">
    
      <h4><span>Kevin Cruz</span></h4>
        <h5>Tienda Online Mi tiendita</h5>
        </footer>
    )
}