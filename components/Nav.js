import React from 'react'
import Link from 'next/link'
import Button from './Button'

const Nav = () => {
  return (
    <nav className='flex justify-between items-center px-5 py-2'>
      <Link href="/" className='text-3xl font-black'>NEMATIQ</Link>
        <form className="inline-block" action="">
          <input 
            type="text"
            placeholder='Need something, honey?'
            className='rounded-md px-2 w-[195px] text-gray-600 mr-2'
          />
          <Button value="Search" />
        </form>
    </nav>
  )
}

export default Nav
