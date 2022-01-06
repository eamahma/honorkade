import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar mb-12 shadow-lg bg-[#D9A404] text-neutral-content'>
      <div className='container mx-auto'>
        <div className='flex-none px-2 mx-2'>
          <Link to='/' className='text-lg font-bold align-middle'>
            Honorkade
          </Link>
        </div>
        <div className='flex-1 px-2 mx-2'>
          <div className='flex justify-end'>
            <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
              Home
            </Link>
            <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
              About
            </Link>
            <Link to='/contact' className='btn btn-ghost btn-sm rounded-btn'>
              Contact
            </Link>          
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Navbar
