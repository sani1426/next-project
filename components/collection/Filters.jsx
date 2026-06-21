"use client"

import Image from "next/image";
import { useState } from "react";
import { assets } from "../../assets/assets";

const Filters = () => {
        const [show , setShow] = useState(false)
        return ( 
                <div className="min-w-60">
                        <div className="flex flex-row gap-2">
                        <p onClick={()=> setShow(!show)} className="my-2 text-xl flex items-center cursor-pointer gap-2">فیلتر ها</p>
                <Image src={assets.dropdown_icon} alt="dropdown-icon" className={`h-3 sm:hidden ${show ? "-rotate-90 " : "rotate-180"}`} />
                        </div>
            
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${show ? "" : "hidden"} sm:block`}>
                        <p className="mb-3 text-sm font-medium">دسته بندی ها</p>
                        <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                                <p className="flex gap-2">
                                        <input className="w-3" type="checkbox" value={"مردانه"} /> مردانه
                                </p>
                                <p className="flex gap-2">
                                        <input className="w-3" type="checkbox" value={"زنانه"} /> زنانه
                                </p>
                                <p className="flex gap-2">
                                        <input className="w-3" type="checkbox" value={"بچگانه"} /> بچگانه
                                </p>
                        </div>
                </div>
                        {/* subcategories */}
                        <div className={`border border-gray-300 pl-5 py-3 my-5 ${show ? "" : "hidden"} sm:block`}>
                        <p className="mb-3 text-sm font-medium">مدل ها</p>
                        <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                                <p className="flex gap-2">
                                        <input className="w-3" type="checkbox" value={"پیراهن"} />پیراهن
                                </p>
                                <p className="flex gap-2">
                                        <input className="w-3" type="checkbox" value={"شلوار"} />شلوار
                                </p>
                                <p className="flex gap-2">
                                        <input className="w-3" type="checkbox" value={"هودی"} />هودی
                                </p>
                        </div>
                </div>

        </div>
         );
}
 
export default Filters;