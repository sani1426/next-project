
import { products } from "../../../../assets/assets";


const productPage = async ({params}) => {
        const {id} = await params
        let productData
        const getdetails = () => {
                productData =  products.find(item => item._id == id)
        }
        getdetails()
   

  return (
    <div>
      <h1>your id is {productData.name}</h1>
    </div>
  )
}

export default productPage
