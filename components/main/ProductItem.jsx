'use client'

import Link from 'next/link'
import { useShopContext } from '../../context/ShopContext'
import Image from 'next/image'
import { useState } from 'react'

const ProductItems = ({ id, image, name, price }) => {
  const { currency } = useShopContext()
  const [hover, setHover] = useState(false)
  const Source = hover ? (image[1] ? image[1] : image[0]) : image[0]
  return (
    <Link
      className='text-gray-700 cursor-pointer shadow shadow-hover rounded-md'
      href={`/products/${id}`}
    >
      <div className='overflow-hidden'>
        <Image
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
          className='hover:scale-110 transition ease-in-out'
          src={Source}
          alt='image'
        />
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>
        {currency}
        {price}
      </p>
    </Link>
  )
}

export default ProductItems
