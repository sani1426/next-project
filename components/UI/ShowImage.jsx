'use client'

import Image from 'next/image'
import { useState } from 'react'

const ShowImage = ({ image }) => {
  const [selectedImage, setSelectedImage] = useState(image[0])
  return (
    <>
      <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
        {image.map((item, index) => (
          <Image
            onClick={() => setSelectedImage(item)}
            src={item}
            key={index}
            alt='product-image'
            className='w-[24%] sm:w-full sm:mb-3 shrink-0 cursor-pointer'
          />
        ))}
      </div>
      <div className='w-full sm:w-[80%]'>
        <Image
          src={selectedImage}
          alt='product-image'
          className='w-full h-auto'
        />
      </div>
    </>
  )
}

export default ShowImage
