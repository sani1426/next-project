
import Link from 'next/link'
import { assets, navItems } from '../../assets/assets'
import NavLink from '../UI/NavLink'


const Navbar = () => {

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      {/* <img src={assets.logo} alt="logo-image" className="w-36" /> */}
      <h1 className='text-3xl font-bold'>سامان شاپ</h1>
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
      {
        navItems.map((n) => (
                <NavLink key={n.id} path={n.href} title={n.title} />
        ))
      }
      </ul>
    </div>
  )
}

export default Navbar
