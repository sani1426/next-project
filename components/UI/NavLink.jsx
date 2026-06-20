"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation'

const NavLink = ({path , title}) => {
        const pathName = usePathname()
        return ( 
                <Link href={path} className='flex flex-col items-center gap-1'>
                <p className="hover:text-blue-500 transition-all duration-300">{title}</p>
                <hr className={`border-none transition-all duration-300 h-[1.5px] bg-gray-700 ${pathName == path ? "w-3/4" : "w-2/4  hidden"}`} />
              </Link>
         );
}
 
export default NavLink;