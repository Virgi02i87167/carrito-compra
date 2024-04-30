import { useId} from "react";
import "./Filters.css";
import { useFilter } from "../hooks/useFilters";

export function Filters(){
    const {filters, setFilters}= useFilter();

   // const [minPrice, setMinPrice]= useState(0);

    //generar id
    const minPriceFilterId=useId();
    const categoryFilterId=useId();
    const handleChangePrice=(event)=>{
   //     setMinPrice(event.target.value);

        setFilters(prevState=>({
            ...prevState,
            minPrice:event.target.value

        }))

    }
    const handleChangeCategory =(event)=>{
        setFilters(prevState=>({
            ...prevState,
            category:event.target.value
        }
        ))
    }
    return(
       <section className="filtros">
        <div>
        <label htmlFor={minPriceFilterId}>Precio</label>
        <input 
        type="range" 
        name="price" 
        id={minPriceFilterId} 
        min="0" 
        max="2000"
        onChange={handleChangePrice}
         />
         <span>${filters.minPrice}</span>
        </div>
        <div>
            <label htmlFor={categoryFilterId}>Categorias</label>
            <select name="category" id={categoryFilterId} onChange={handleChangeCategory}>
                <option value="all">All</option>
                <option value="laptops">Laptops</option>
                <option value="smartphones">Celulares</option>
                <option value="motorcycle">Motos</option>
            </select>
        </div>
       </section>
    )
}