"use client"

import { useState } from 'react';
import { FaAlignLeft } from 'react-icons/fa'
import { IoIosArrowForward } from "react-icons/io";

const MobileMenu = () => {
        const [visible , setVisible] = useState(false)
        return ( 
                <>
                 <FaAlignLeft onClick={()=> setVisible(!visible)} className='text-2xl cursor-pointer sm:hidden' />
                 <div className={`absolute top-0 left-0 bottom-0 overflow-hidden bg-white transition-all shadow-2xl ${visible ? "w-[40%]" : "w-0"}`}>
                        <div className="flex flex-col text-gray-600">
                                <div onClick={()=> setVisible(false)} className="flex items-center gap-4 p-3">
                                        <IoIosArrowForward  className='text-2xl cursor-pointer'/>
                                        <p>back</p>
                                </div>
                        </div>
                 </div>
                </>
         );
}
 
export default MobileMenu;