"use client"

import { useState } from 'react';
import { FaAlignLeft } from 'react-icons/fa'
import { IoIosArrowForward } from "react-icons/io";
import { navItems } from '../../assets/assets';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MobileMenu = () => {
        const [visible , setVisible] = useState(false)
        const pathName = usePathname()
        return ( 
                <>
                 <FaAlignLeft onClick={()=> setVisible(!visible)} className='text-2xl cursor-pointer sm:hidden' />
                 <div className={` top-0 left-0 bottom-0 overflow-hidden bg-white transition-all shadow-xl fixed ${visible ? "w-[60%]" : "w-0"}`}>
                        <div className="flex flex-col text-gray-600">
                                <div onClick={()=> setVisible(false)} className="flex items-center gap-1 p-3 cursor-pointer">
                                        <IoIosArrowForward  className='text-2xl '/>
                                        <p>بازگشت</p>
                                </div>
                                {
                                        navItems.map((item) => (
                                                <Link onClick={()=> setVisible(false)} key={item.id} href={item.href} className={`py-2 pr-6 border-b`} >
                                                        {item.title}
                                                </Link>
                                        ))
                                }
                        </div>
                 </div>
                </>
         );
}
 
export default MobileMenu;