'use client'

import Link from 'next/link'
import { useShopContext } from '../../context/ShopContext'

const ProductItems = ({ id , image , name , price }) => {
  const { currency } = useShopContext()
  return (
  <Link className='text-gray-700 cursor-pointer shadow-hover' href={`/product/${id}`}>
        <div className='overflow-hidden'>
                <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
  </Link>
  )
}

export default ProductItems
