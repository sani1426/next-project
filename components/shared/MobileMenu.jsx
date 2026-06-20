"use client"

import { useState } from 'react';
import { FaAlignLeft } from 'react-icons/fa'

const MobileMenu = () => {
        const [visible , setVisible] = useState(false)
        return ( 
                <>
                 <FaAlignLeft onClick={()=> setVisible(!visible)} className='text-2xl cursor-pointer sm:hidden' />
                 
                </>
         );
}
 
export default MobileMenu;