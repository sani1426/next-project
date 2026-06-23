import { products } from "../../assets/assets";
import ProductItems from "../main/ProductItem";
import Title from "../main/Title";



const RelatedProduct = ({category,subCategory}) => {
        let related = [];
        const getRelated = () => {
                if(products.length > 0) {
                        let productCopy = products.slice()
                        productCopy = productCopy.filter((item) => category === item.category)
                        productCopy = productCopy.filter((item) => subCategory === item.subCategory)
                        related = productCopy.slice(0 , 5)
                }
        }
        getRelated()
  return (
        <div className='my-10 px-5  md:px-10'>
        <div className='text-center text-3xl py-8'>
          <Title text1={'محصولات'} text2={'مرتبط'} />
          {/* <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            {' '}
            پرفروش ترین محصولات از میان صدها محصول
          </p> */}
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {related.map((item) => (
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

export default RelatedProduct
