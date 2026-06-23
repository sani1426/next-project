"use client"
import React from 'react'
import { useShopContext } from '../../context/ShopContext'

const AddToCartButton = ({productData,size}) => {
        const { AddToCart,cart} = useShopContext()
  return (
        <button onClick={()=> {
                if(size){
                        AddToCart(productData , size)
                        console.log(productData,size);
                        console.log(cart);
                }else{
                        console.log("size is empty");
                }
        }} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>
        اضافه به سبد خرید
      </button>
  )
}

export default AddToCartButton
