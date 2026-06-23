import Image from 'next/image'
import { products } from '../../../../assets/assets'
import ShowImage from '../../../../components/UI/ShowImage'

const productPage = async ({ params }) => {
  const { id } = await params
  let productData
  const getdetails = () => {
    productData = products.find((item) => item._id == id)
  }
  getdetails()

  return (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row '>
       <ShowImage image={productData.Image} />
        </div>
      </div>
    </div>
  )
}

export default productPage
