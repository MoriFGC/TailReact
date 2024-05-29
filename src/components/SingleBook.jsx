import React, { useState } from 'react'

function SingleBook({book}) {
    const [selected, setSelected] = useState(false);

  return (
    <div 
        style={{border: selected ? '2px solid blue' : 'none'}}
        onClick={() => setSelected(!selected) }
        className='bg-slate-800 h-[425px] w-[250px] text-white mx-auto rounded-[10px]
    '>
            <div className='h-[300px] w-full'>
                <img className='w-full h-full rounded-t-[10px]' src={book.img} alt="book" />
            </div>
            <div className='flex flex-col items-center gap-2 p-2'>
                <span className='text-center font-bold text-[20px] text-ellipsis whitespace-nowrap overflow-hidden w-full'>
                    {book.title}
                </span>
                <span className='capitalize text-[15px] text-gray-400 hover:text-pink-400'>
                    {book.category}
                </span>
                <span className='text-gray-400 hover:text-pink-400'>
                    {book.price}$
                </span>

            </div>
        </div>
  )
}

export default SingleBook