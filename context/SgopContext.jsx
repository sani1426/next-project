"use client"

import { createContext, useContext } from "react"

export const ShopContext = createContext()

export const ShopContextProvider = ({children}) => {

        return(
                <ShopContext.Provider>
                        {children}
                </ShopContext.Provider>
        )
}

export const useShopContext = () =>useContext(ShopContext)