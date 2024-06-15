import React, { useContext } from 'react'
import { ThemeContext } from '../modules/Modules';
import { useNavigate } from 'react-router-dom';

 function SingleBook({selected, setSelected, book}) {

    const navigate = useNavigate();

    function goToDetails(id) {
        navigate(`/details/${id}`);
    }

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
     
     let [themeCtx] = useContext(ThemeContext);
     
   return (
    <div className='w-[250px] mx-auto' data-testid="card" >
        <div 
          //style={{border: selected === book.asin ? '4px solid magenta' : 'none'}}
         onClick={() => setSelected(book.asin) }
         className={classNames('h-[450px] w-[250px]  mx-auto rounded-[10px] ciccio', themeCtx === 'dark' ? 'bg-slate-800 text-white' : 'bg-slate-100', selected === book.asin ? 'border-[4px] border-solid border-[magenta]' : 'none')}>
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
                 <button 
                 className='w-[80px] h-[30px] text-[15px] font-bold bg-pink-400 text-slate-800 hover:text-pink-400 hover:bg-slate-800 rounded-[20px]'  
                 onClick={() => goToDetails(book.asin)}
                 >
                    Details
                 </button>
             </div>
         </div>
    </div>
     
         
   )
 }

 export default SingleBook


