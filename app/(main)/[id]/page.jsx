"use cache"

import { Suspense } from "react";

const ProductDetails = async ({params}) => {
        const {id} = await params
        return ( 
                <Suspense fallback={<h1>loading</h1>}>
                <div>
                        <h1>{id}</h1>
                </div>
                </Suspense>
         );
}
 
export default ProductDetails;