"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import { useShopContext } from "../../context/ShopContext";

const Filters = () => {
 const {newProducts, setNewProducts} = useShopContext()
        const [show , setShow] = useState(false)
        const [category , setCategory] = useState([])
        const [subCategory , setSubCategory] = useState([])
        const toggleCategory = (e) => {
                if(category.includes(e.target.value)) {
                        setCategory(prev => prev.filter(item => item !== e.target.value))
                }else{
                        setCategory(prev => [...prev , e.target.value])
                }
        }
        const toggleSubCategory = (e) => {
                if(subCategory.includes(e.target.value)) {
                        setSubCategory(prev => prev.filter(item => item !== e.target.value))
                }else{
                        setSubCategory(prev => [...prev , e.target.value])
                }
        }
        const applyFilter = () =>{
                let productCopy =  newProducts.slice()
                   console.log(productCopy);
                if(category.length > 0) {
                        productCopy = productCopy.filter(item => category.includes(item.category))
                        console.log(productCopy);
                }
                if(subCategory.length > 0) {
                        productCopy = productCopy.filter(item => subCategory.includes(item.subCategory))
                }
                setNewProducts(productCopy)

        }
        useEffect(()=>{
                applyFilter()
        },[category , subCategory])
    
        return ( 
                <div className="min-w-60">
                        <div className="flex items-center flex-row gap-2">
                        <p onClick={()=> setShow(!show)} className="my-2 text-xl flex items-center cursor-pointer gap-2">فیلتر ها</p>
                <Image src={assets.dropdown_icon} alt="dropdown-icon" className={`h-3 sm:hidden ${show ? "rotate-90 " : "rotate-180"}`} />
                        </div>
            
                <div className={`border border-gray-300 pr-5 py-3 mt-6 ${show ? "" : "hidden"} sm:block`}>
                        <p className="mb-3 text-sm font-medium">دسته بندی ها</p>
                        <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                                <p className="flex gap-2">
                                        <input className="w-3" type="checkbox" value={"men"} onChange={toggleCategory} /> مردانه
                                </p>
                                <p className="flex gap-2">
                                        <input className="w-3" type="checkbox" value={"women"} onChange={toggleCategory} /> زنانه
                                </p>
                                <p className="flex gap-2">
                                        <input className="w-3" type="checkbox" value={"kids"} onChange={toggleCategory} /> بچگانه
                                </p>
                        </div>
                </div>
                        {/* subcategories */}
                        <div className={`border border-gray-300 pr-5 py-3 my-5 ${show ? "" : "hidden"} sm:block`}>
                        <p className="mb-3 text-sm font-medium">مدل ها</p>
                        <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                                <p className="flex gap-2">
                                        <input className="w-3" type="checkbox" value={"Topwear"} onChange={toggleSubCategory} />پیراهن
                                </p>
                                <p className="flex gap-2">
                                        <input className="w-3" type="checkbox" value={"Bottomwear"} onChange={toggleSubCategory} />شلوار
                                </p>
                                <p className="flex gap-2">
                                        <input className="w-3" type="checkbox" value={"Winterwear"} onChange={toggleSubCategory} />هودی
                                </p>
                        </div>
                </div>

        </div>
         );
}
 
export default Filters;