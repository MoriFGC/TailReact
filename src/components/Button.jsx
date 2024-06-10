 import React, { useContext } from 'react'
import { ThemeContext } from '../modules/Modules';
 export default function ({setType}) {

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }


  let [themeCtx] = useContext(ThemeContext);


   return (
     <div className='flex justify-center flex-wrap'>
         <button className={classNames('font-bold rounded-[50px] active:bg-white active:text-pink-400 m-[30px]  text-pink-400 hover:text-slate-800 hover:bg-pink-400 w-[100px] h-[50px]', themeCtx === 'dark' ? 'bg-slate-800' : 'bg-slate-100')} onClick={() => setType('horror')}>Horror</button>
         <button className={classNames('font-bold rounded-[50px] active:bg-white active:text-pink-400 m-[30px]  text-pink-400 hover:text-slate-800 hover:bg-pink-400 w-[100px] h-[50px]', themeCtx === 'dark' ? 'bg-slate-800' : 'bg-slate-100')} onClick={() => setType('history')}>History</button>
         <button className={classNames('font-bold rounded-[50px] active:bg-white active:text-pink-400 m-[30px]  text-pink-400 hover:text-slate-800 hover:bg-pink-400 w-[100px] h-[50px]', themeCtx === 'dark' ? 'bg-slate-800' : 'bg-slate-100')} onClick={() => setType('romance')}>Romance</button>
         <button className={classNames('font-bold rounded-[50px] active:bg-white active:text-pink-400 m-[30px]  text-pink-400 hover:text-slate-800 hover:bg-pink-400 w-[100px] h-[50px]', themeCtx === 'dark' ? 'bg-slate-800' : 'bg-slate-100')} onClick={() => setType('scifi')}>Scifi</button>
         <button className={classNames('font-bold rounded-[50px] active:bg-white active:text-pink-400 m-[30px]  text-pink-400 hover:text-slate-800 hover:bg-pink-400 w-[100px] h-[50px]', themeCtx === 'dark' ? 'bg-slate-800' : 'bg-slate-100')} onClick={() => setType('fantasy')}>fantasy</button>
     </div>
   )
 }








