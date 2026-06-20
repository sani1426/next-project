import Link from 'next/link'
import { assets, navItems } from '../../assets/assets'
import NavLink from '../UI/NavLink'
import { FiSearch } from 'react-icons/fi'
import { BsPersonCircle } from 'react-icons/bs'
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 font-medium px-10'>
      {/* <img src={assets.logo} alt="logo-image" className="w-36" /> */}
      <h1 className='sm:text-3xl md:text-4xl font-bold'>سامان شاپ</h1>
      <ul className='hidden sm:flex gap-5 sm:text-sm md:text-lg text-gray-700'>
        {navItems.map((n) => (
          <NavLink key={n.id} path={n.href} title={n.title} />
        ))}
      </ul>
      <div className='flex items-center gap-6'>
        <FiSearch className='text-2xl cursor-pointer' />
        <div className='gr relative'>
          <BsPersonCircle className='text-2xl cursor-pointer' />
          <div className='gr-h opacity-0 pointer-events-none absolute transition-all duration-400 dropdown-menu left-0 pt-4'>
            <div className='flex flex-col gap-2   bg-slate-100 text-gray-500 rounded-md'>
              <Link href="/" className='cursor-pointer text-hovering px-5 py-2'>پروفایل</Link>
              <Link href="/orders" className='cursor-pointer text-hovering px-5 py-2'>سفارشات</Link>
              <Link href="/" className='cursor-pointer text-hovering px-5 py-2'>خروج</Link>
            </div>
          </div>
        </div>
        <Link href="/cart" className='relative'>
          <FaCartShopping className='text-2xl cursor-pointer' />
          <p className='absolute riht-[-5px] -bottom-1.25 w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
