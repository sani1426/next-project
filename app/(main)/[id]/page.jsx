"use cache"
const ProductDetails = async ({params}) => {
        const {id} = await params
        return ( 
                <div>
                        <h1>{id}</h1>
                </div>
         );
}
 
export default ProductDetails;