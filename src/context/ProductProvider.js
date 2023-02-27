import React from "react";
import { useState } from "react";
import { ProductContext } from "./ProductContext";

export const ProductProvider = ({children}) => {
    const [carreto, setCarreto] = useState([])

    return (
        <ProductContext.Provider value={{carreto, setCarreto}}>
            {children}
        </ProductContext.Provider>
    )
}