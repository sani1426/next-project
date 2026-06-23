"use client"

import { useState } from "react"

const ShowSize = ({sizes}) => {
        const [selectedSize , setSelectedSize] =useState('')
  return (
        <div className='flex flex-col gap-4 my-8'>
        <p>سایز مورد نظر را انتخاب کنید</p>
        <div className='flex gap-2'>
                {
                        sizes.map((size,index) => (
                                <button onClick={()=> setSelectedSize(size)} className={`border  py-2 px-4 bg-gray-100 ${selectedSize == size && "border-blue-600"}`} key={index} >{size}</button>
                        ))
                }
        </div>
</div>
  )
}

export default ShowSize
