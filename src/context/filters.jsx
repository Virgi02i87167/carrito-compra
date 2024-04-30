import { createContext, useState } from "react";

//Crear el contexto

export const FiltersContext= createContext();

//Proveer el contexto 

export function FiltersProvider ({children}){
   const [filters,setFilters]= useState(  {
    category:"all",
    minPrice:200   
})
    return(
        <FiltersContext.Provider value={{
          filters,
          setFilters
        }}>
            {children}
        </FiltersContext.Provider>
    )
}