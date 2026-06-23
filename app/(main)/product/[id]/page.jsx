import Image from 'next/image'
import { assets, products } from '../../../../assets/assets'
import ShowImage from '../../../../components/UI/ShowImage'
import ShowSize from '../../../../components/UI/ShowSize'

const productPage = async ({ params }) => {
  const { id } = await params
  let productData
  const getdetails = () => {
    productData = products.find((item) => item._id == id)
  }
  getdetails()

  return (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 px-5 sm:px-10'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row '>
          <ShowImage image={productData.image} />
        </div>
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <Image src={assets.star_icon} alt='star-icon' className='w-4' />
            <Image src={assets.star_icon} aalt='star-icon' className='w-4' />
            <Image src={assets.star_icon} alalt='star-icon' lassName='w-4' />
            <Image src={assets.star_icon} aalt='star-icon' className='w-4' />
            <Image
              src={assets.star_dull_icon}
              alt='star-icon'
              className='w-4'
            />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>${productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>
            {productData.description}
          </p>
          <ShowSize sizes={productData.sizes} />
          <button className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>
            اضافه به سبد خرید
          </button>
        </div>
      </div>
    </div>
  )
}

export default productPage
