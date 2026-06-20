"use client"

import { createContext, useContext } from "react"
import { products } from "../assets/assets"

export const ShopContext = createContext()

export const ShopContextProvider = ({children}) => {
        const currency = "$"
        return(
                <ShopContext.Provider value={{products, currency}}>
                        {children}
                </ShopContext.Provider>
        )
}

export const useShopContext = () =>useContext(ShopContext)