
import Filters from "../../../components/collection/Filters";
import ShowProducts from "../../../components/collection/ShowProducts";


const Collection = () => {
        return ( 
                <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t px-3  md:px-6">
                        <Filters />
                      <ShowProducts />
                </div>
         );
}
 
export default Collection;