import React from 'react'

export default function ({setType}) {
  return (
    <>
        <button className='m-[30px] bg-slate-800 text-pink-400 hover:text-slate-800 hover:bg-pink-400 w-[100px] h-[50px]  ' onClick={() => setType('horror')}>Horror</button>
        <button className='m-[30px] bg-slate-800 text-pink-400 hover:text-slate-800 hover:bg-pink-400 w-[100px] h-[50px]  ' onClick={() => setType('history')}>History</button>
        <button className='m-[30px] bg-slate-800 text-pink-400 hover:text-slate-800 hover:bg-pink-400 w-[100px] h-[50px]  ' onClick={() => setType('romance')}>Romance</button>
        <button className='m-[30px] bg-slate-800 text-pink-400 hover:text-slate-800 hover:bg-pink-400 w-[100px] h-[50px]  ' onClick={() => setType('scifi')}>Scifi</button>
        <button className='m-[30px] bg-slate-800 text-pink-400 hover:text-slate-800 hover:bg-pink-400 w-[100px] h-[50px]  ' onClick={() => setType('fantasy')}>fantasy</button>
    </>

  )
}
