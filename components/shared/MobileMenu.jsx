"use client"

import { useState } from 'react';
import { FaAlignLeft } from 'react-icons/fa'

const MobileMenu = () => {
        const [visible , setVisible] = useState(false)
        return ( 
                <>
                 <FaAlignLeft onClick={()=> setVisible(!visible)} className='text-2xl cursor-pointer sm:hidden' />
                 <div className={`absolute top-0 left-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? "w-full" : "w-0"}`}>

                 </div>
                </>
         );
}
 
export default MobileMenu;