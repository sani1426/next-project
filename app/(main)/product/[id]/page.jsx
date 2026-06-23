import Image from 'next/image'
import { assets, products } from '../../../../assets/assets'
import ShowImage from '../../../../components/UI/ShowImage'
import ShowInfo from '../../../../components/UI/ShowInfo'
import RelatedProduct from '../../../../components/shared/RelatedProduct'

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
        {/* --------------- product info ----------- */}
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
          <ShowInfo product={productData} />

          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>محصول 100% اورجینال</p>
            <p>امکان پرداخت در محل</p>
            <p>مرجوعی آسان با ضمانت هفت روز</p>
          </div>
        </div>
      </div>
      {/* --------------- description & review section ----------- */}
      <div className='mt-20'>
        <div className='flex'>
          <p className='border text-sm px-5 py-3'>توضیحات</p>
          <p className='border text-sm px-5 py-3'>نظرات (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط لورم ایپسوم متن ساختگی با
            تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
            برای شرایط فعلی تکنولوژی مورد نیازفعلی تکنولوژی مورد نیاز
          </p>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
          </p>
        </div>
      </div>
      {/* -------------- related Product Display ------------------*/}
      <RelatedProduct
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  )
}

export default productPage
