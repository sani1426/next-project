'use client'

import Link from 'next/link'
import { useShopContext } from '../../context/ShopContext'

const ProductItems = ({ product }) => {
  const { currency } = useShopContext()
  return (
  <Link className='text-gray-700 cursor-pointer shadow-hover' href={`/product/${product.id}`}>
        <div className='overflow-hidden'>
                <img className='hover:scale-110 transition ease-in-out' src={product.image[0]} alt="" />
        </div>
        <p className='pt-3 pb-1 text-sm'>{product.name}</p>
        <p className='text-sm font-medium'>{currency}{product.price}</p>
  </Link>
  )
}

export default ProductItems
