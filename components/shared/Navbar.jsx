import Link from 'next/link'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      {/* <img src={assets.logo} alt="logo-image" className="w-36" /> */}
      <h1 className='text-3xl font-bold'>سامان شاپ</h1>
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <Link href='/' className='flex flex-col items-center gap-1'>
          <p>صفحه اصلی</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />
        </Link>
        <Link href='/collection' className='flex flex-col items-center gap-1'>
          <p>کالکشن</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />
        </Link>
        <Link href='/about' className='flex flex-col items-center gap-1'>
          <p>درباره ما</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />
        </Link>
        <Link href='/contact' className='flex flex-col items-center gap-1'>
          <p>تماس با ما</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />
        </Link>
      </ul>
    </div>
  )
}

export default Navbar
