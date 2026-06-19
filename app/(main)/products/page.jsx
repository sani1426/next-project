// "use cache"
// const Page = async () => {
//         let allProduct = []
//         let res = await fetch("https://jsonplaceholder.typicode.com/todos//")
//         if(!res.ok){
//                 return(
//                         <div>خطا در بارگیری</div>
//                 )
//         }
//         allProduct = await res.json()
//         return ( 
//                 <div>
//                         {
//                                 allProduct.map((p)=>(
//                                         <h1>{p.title}</h1>
//                                 ))
//                         }
//                 </div>
//          );
// }
 
// export default Page;