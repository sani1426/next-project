import { products } from "../../assets/assets";
import ProductItems from "./ProductItem";
import Title from "./Title";
const LatestCollection = () => {
        let latestProduct = []
        latestProduct = products.slice(0,10)
        console.log(latestProduct);
        return ( 
                <div className="my-10">
                        <div className="text-center py-8 text-3xl">
                                <Title text1={"جدیدترین"} text2={"کالکشن"} />
                                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 ">جدیدترین محصولات روز دنیا و بروزترین کالکشن های مد روز</p>
                        </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                        {
                                latestProduct.map((p) =>(
                                        <ProductItems key={p.id} product={p} />
                                ))
                        }
                </div>
                </div>
         );
}
 
export default LatestCollection;