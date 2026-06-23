'use client'

import { createContext, useContext, useState } from 'react'
import { products } from '../assets/assets'

export const ShopContext = createContext()

export const ShopContextProvider = ({ children }) => {
  const currency = '$'
  const delivery_fee = 10
  const [showSerachBar, setShowSearchBar] = useState(false)
  const [cart, setCart] = useState([])
  const AddToCart = ({ product, size }) => {
    console.log(product , size);
    setCart((prev) => {
      let selectedProduct = prev.find((p) => p._id == product._id)
      if (!selectedProduct) {
        return [...prev, { ...product, quantity: 1, size: size }]
      } else {
        if (selectedProduct.size === size) {
          return [...prev, { ...product, quantity: product.quantity + 1 }]
        } else {
          return [...prev, { ...product, quantity: 1, size: size }]
        }
      }
    })
  }
  const RemoveFromCart = ({ productId }) => {
    setCart((prev) => prev.filter((product) => product._id != productId))
  }

  const ChangeQuantity = ({ id, q }) => {
    setCart((prev) => {
      prev.map((item) => {
        item._id == id ? { ...item, quantity: q } : item
      })
    })
  }

  return (
    <ShopContext.Provider
      value={{
        products,
        currency,
        delivery_fee,
        showSerachBar,
        setShowSearchBar,
        AddToCart,
        cart
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}

export const useShopContext = () => useContext(ShopContext)
