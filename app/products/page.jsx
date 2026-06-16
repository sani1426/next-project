
const Page = async () => {
        let allProduct = []
        let res = await fetch("https://fakestoreapi.com/products/")
        allProduct = await res.json()
        return ( 
                <div>
                        {
                                allProduct.map((p)=>(
                                        <h1>{p.title}</h1>
                                ))
                        }
                </div>
         );
}
 
export default Page;