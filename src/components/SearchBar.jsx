import React, { useContext } from 'react'
import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/outline';
import { ThemeContext } from '../modules/Modules';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SearchBar({text, handleText}) {

  let [themeCtx] = useContext(ThemeContext);

  return (
    <div className={classNames('w-[150px] md:w-[250px] rounded-[10px] h-[2.5rem] py-[0px] px-[15px] flex items-center', themeCtx === 'dark' ? 'bg-white' : 'bg-slate-800 text-white')}>
          <input className='bg-transparent border-none h-[100%] text-[1.25rem] w-[100%] ms-[5px] focus:outline-none'
          type='search'  
          placeholder='Search...'
          value={text} 
          onChange={handleText}
          />
          <MagnifyingGlassCircleIcon className='w-[40px] text-pink-400'/>
        </div>
  )
}

