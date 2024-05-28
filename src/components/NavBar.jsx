import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'


 function NavBar() {
  return (
    <nav className='flex justify-between items-center h-[80px] w-full text-white px-[10px] bg-slate-900'>
        {/* suddivido la nav in tre parti */}
        <div className='flex items-center gap-[10px]'>
            {/* logo + nome sito */}
            <img src='src\assets\react.svg' alt='logo-react'/>
            <span className='text-[25px] font-bold'>TailReact</span>
            <ul className='flex mt-1 gap-[10px] ms-3 text-gray-500 font-semibold'>
                <li className='hover:text-pink-400'><a href="#">Home</a></li>
                <li className='hover:text-pink-400'><a href="#">About</a></li>
                <li className='hover:text-pink-400'><a href="#">Browse</a></li>
            </ul>
        </div>

        <div className='flex justify-center items-center gap-2'>
            <input className='h-[30px] rounded-[15px] px-3 text-white  bg-slate-800 ' type="search" placeholder='Search...'/>
            <button className='hover:text-pink-400 '><MagnifyingGlassIcon className='w-[25px]'/></button>
        </div>
    </nav>
  )
}

export default NavBar