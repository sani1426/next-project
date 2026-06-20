import Link from 'next/link'
import { assets, navItems } from '../../assets/assets'
import NavLink from '../UI/NavLink'
import { FiSearch } from "react-icons/fi";
import { BsPersonCircle } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 font-medium px-10'>
      {/* <img src={assets.logo} alt="logo-image" className="w-36" /> */}
      <h1 className='text-4xl font-bold'>سامان شاپ</h1>
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        {navItems.map((n) => (
          <NavLink key={n.id} path={n.href} title={n.title} />
        ))}
      </ul>
      <div className='flex items-center gap-6'>
     <FiSearch className='text-2xl cursor-pointer' />
        <div className='gr relative'>
    <BsPersonCircle className='text-2xl cursor-pointer' />
          <div className='gr-h hidden absolute dropdown-menu -left-2 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>پروفایل</p>
              <p className='cursor-pointer hover:text-black'>سفارشات</p>
              <p className='cursor-pointer hover:text-black'>خروج</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
