import React from 'react'
import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/outline';

export const SearchBar = ({text, handleText}) => {
  return (
    <div className='bg-white mx-auto w-[250px] rounded-[10px] h-[2.5rem] py-[0px] px-[15px] flex items-center '>
          <input className='bg-transparent border-none h-[100%] text-[1.25rem] w-[100%] ms-[5px] focus:outline-none'
          type='search' 
          placeholder='Search Books...' 
          value={text} 
          onChange={handleText}
          />
          <MagnifyingGlassCircleIcon className='w-[40px] text-pink-400'/>
        </div>
  )
}
