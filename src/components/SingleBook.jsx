 import React, { useContext } from 'react'
 import CommentArea from './CommentArea';
import { ThemeContext } from '../modules/Modules';

 function SingleBook({selected, setSelected, book}) {

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
     
     let [themeCtx] = useContext(ThemeContext);
     
   return (
    <div className='w-[250px] mx-auto'>
        <div 
         style={{border: selected === book.asin ? '4px solid magenta' : 'none'}}
         onClick={() => setSelected(book.asin) }
         className={classNames(' h-[425px] w-[250px]  mx-auto rounded-[10px]', themeCtx === 'dark' ? 'bg-slate-800 text-white' : 'bg-slate-100')}>
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
    </div>
     
         
   )
 }

 export default SingleBook


