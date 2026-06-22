"use client"

import { useState } from "react";
import { useShopContext } from "../../context/ShopContext";
import Image from "next/image";
import { assets } from "../../assets/assets";

const SearchBar = () => {
        const {showSearchBar , setShowSearchBar} =useShopContext()
        const [search , setSearch] = useState('')

                return  ( 
                        <div className={`border-t border-b bg-gray-50 text-center ${showSearchBar ? '' : 'hidden'}`}>
                        <div className="inline-flex items-center border border-gray-400 px-5 py-2 my-5">
                                <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="سرچ کنید ..." className="flex-1 outline-none bg-inherit text-sm" />
                                <Image src={assets.search_icon} alt="search-icon" className="w-4" />
                        </div>
                        <Image onClick={()=>setShowSearchBar(false)} src={assets.cross_icon} alt="cross" className="inline w-3 cursor-pointer" />
                </div>
                 )
        // }

}
 
export default SearchBar;