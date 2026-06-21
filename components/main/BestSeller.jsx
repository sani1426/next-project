
import { products } from "../../assets/assets";
import ProductItems from "./ProductItem";
const BestSeller = () => {
        const BestSellerProduct = products.filter((product) => product.bestseller == true)
        return ( 
                <div>
                        {
                                BestSellerProduct.map((item) => (
                                        <ProductItems key={item._id} id={item._id} name={item.name} image={item.image} price={item.price} />
                                ))
                        }
                </div>
         );
}
 
export default BestSeller;
<div>

</div>