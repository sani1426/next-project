'use client'

import { createContext, useContext, useState } from 'react'
import { products } from '../assets/assets'

export const ShopContext = createContext()

export const ShopContextProvider = ({ children }) => {
  const currency = '$'
  const delivery_fee = 10
const [showSerachBar , setShowSearchBar] = useState(true)



  return (
    <ShopContext.Provider
      value={{ products, currency, delivery_fee,showSerachBar , setShowSearchBar}}
    >
      {children}
    </ShopContext.Provider>
  )
}

export const useShopContext = () => useContext(ShopContext)
