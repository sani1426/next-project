import Filters from "../../../components/collection/Filters";

const Collection = () => {
        return ( 
                <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
                        <Filters />
                </div>
         );
}
 
export default Collection;