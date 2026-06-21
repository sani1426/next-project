'use client'

import Link from 'next/link'
import { useShopContext } from '../../context/ShopContext'
import Image from 'next/image'

const ProductItems = ({ id , image , name , price }) => {
  const { currency } = useShopContext()
  return (
  <Link className='text-gray-700 cursor-pointer shadow shadow-hover rounded-md' href={`/products/${id}`}>
        <div className='overflow-hidden'>
                <Image className='hover:scale-110 transition ease-in-out' src={image[0]} alt="image" />
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
  </Link>
  )
}

export default ProductItems
