import { products } from "../../../../assets/assets";


const productPage = async ({params}) => {
        const {id} = await params
        let productData ;
      productData =  products.find(item => item._id == Number(id))
      
  return (
    <div>
      <h1>your id is {productData.name}</h1>
    </div>
  )
}

export default productPage
