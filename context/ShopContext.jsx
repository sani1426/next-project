'use client'

import { createContext, useContext, useState } from 'react'
import { products } from '../assets/assets'

export const ShopContext = createContext()

export const ShopContextProvider = ({ children }) => {
  const currency = '$'
  const delivery_fee = 10
  const [newProducts, setNewProducts] = useState(products)
  const applyFilter = (category, subCategory) => {
    if (category.length > 0) {
      setNewProducts(prev => {
        prev.filter(item => category.includes(item.category))
        }
      )
      }
    }
  

  //        let  newProduct =   products.filter(item => item.category !== category)

  return (
    <ShopContext.Provider
      value={{ products, currency, delivery_fee, applyFilter, newProducts }}
    >
      {children}
    </ShopContext.Provider>
  )
}

export const useShopContext = () => useContext(ShopContext)
