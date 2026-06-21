import { products } from '../../assets/assets'
import ProductItems from './ProductItem'
import Title from './Title'
const BestSeller = () => {
  const BestSellerProduct = products.filter(
    (product) => product.bestseller == true
  )
  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
        <Title text1={'پرفروش ترین'} text2={'محصولات'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          {' '}
          پرفروش ترین محصولات از میان صدها محصول
        </p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {BestSellerProduct.slice(0, 5).map((item) => (
          <ProductItems
            key={item._id}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  )
}

export default BestSeller
;<div></div>
