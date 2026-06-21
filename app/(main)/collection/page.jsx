import { products } from "../../../assets/assets";
import Filters from "../../../components/collection/Filters";
import ProductItems from "../../../components/main/ProductItem";
import Title from "../../../components/main/Title";

const Collection = () => {
        return ( 
                <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t px-3  md:px-6">
                        <Filters />
                        <div className="flex-1">
                                <div className="flex justify-between text-base sm:text-2xl mb-4">
                                        <Title text1={"همه ی"} text2={"محصولات"} />
                                        <select className="border-2 border-gray-300 text-sm px-2">
                                                <option value="relevent">مرتب سازی محصولات مرتبط</option>
                                                <option value="low-high">ارزانترین به گرانترین</option>
                                                <option value="high-low">گرانترین به ارزانترین</option>
                                        </select>
                                </div>

                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
                                        {
                                                products.map((product) => (
                                                        <ProductItems key={product._id} name={product.name} image={product.image} price={product.price} />
                                                ))
                                        }
                                </div>
                        </div>
                </div>
         );
}
 
export default Collection;