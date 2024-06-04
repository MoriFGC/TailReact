import React from 'react'
import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/outline';


export default function SearchBar({text, handleText}) {
  // console.log(text);
  return (
    <div className='bg-white w-[150px] md:w-[250px] rounded-[10px] h-[2.5rem] py-[0px] px-[15px] flex items-center '>
          <input className='bg-transparent border-none h-[100%] text-[1.25rem] w-[100%] ms-[5px] focus:outline-none'
          type='search'  
          value={text} 
          onChange={handleText}
          />
          <MagnifyingGlassCircleIcon className='w-[40px] text-pink-400'/>
        </div>
  )
}

