'use client'

import { useState } from 'react'

import { assets, navItems } from '../../assets/assets'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const MobileMenu = () => {
  const [visible, setVisible] = useState(false)
  const pathName = usePathname()
  return (
    <>
      <Image
        onClick={() => setVisible(!visible)}
        src={assets.menu_icon}
        alt='search-icon'
        className='w-5 cursor-pointer sm:hidden'
      />
      <div
        className={` top-0 left-0 bottom-0 overflow-hidden bg-white transition-all shadow-xl fixed ${
          visible ? 'w-[60%]' : 'w-0'
        }`}
      >
        <div className='flex flex-col text-gray-600'>
          <div
            onClick={() => setVisible(false)}
            className='flex items-center gap-1 p-3 cursor-pointer'
          >
            <Image
              src={assets.dropdown_icon}
              alt='search-icon'
              className='w-5 cursor-pointer'
            />
            <p>بازگشت</p>
          </div>
          {navItems.map((item) => (
            <Link
              onClick={() => setVisible(false)}
              key={item.id}
              href={item.href}
              className={`py-2 pr-6 border-b link-hovering ${
                pathName == item.href ? 'bg-blue-500 text-white' : ''
              }`}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default MobileMenu
