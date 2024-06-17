 import React, { useContext, useState } from 'react'
import { ThemeContext } from '../modules/Modules';
import ApiAxios from '../modules/ApiAxios';

 export default function AddComment({comments, setComments, asin}) {

     const [valoreInput, setValoreInput] = useState('')
     const [rate, setRate] = useState(0)

     function classNames(...classes) {
      return classes.filter(Boolean).join(' ')
    }
  
  
    let [themeCtx] = useContext(ThemeContext);

     const createComment = (e) => {

      e.preventDefault();

           ApiAxios.post('/comments/', {
            comment: valoreInput, 
            rate: rate, 
            elementId: asin
           }, {
            headers: {
              'Content-Type': 'application/json'
            }
           })
           .then(response => {
            setComments([...comments, response.data])
            setValoreInput('');
            setRate(0)
           })
           .catch((error) =>
            console.error("Errore", error)
          )
     }

   return (
     <form className='flex flex-col justify-between' >
         <input className='h-[80px] mb-[10px]'
          type="text"
          value={valoreInput}
          onChange={(e) => setValoreInput(e.target.value)}
          />
             <select className='mb-[10px]' id="rate" name="rate" value={rate} onChange={(e) => setRate(parseInt(e.target.value))}>
             <option value={0}>Select Rating</option>
               <option value={1}>1</option>
               <option value={2}>2</option>
               <option value={3}>3</option>
               <option value={4}>4</option>
               <option value={5}>5</option>
             </select>
             <button className={classNames(' text-pink-400 hover:bg-pink-400 hover:text-slate-800 h-[40px] font-bold', themeCtx === 'dark' ? 'bg-slate-800' : 'bg-slate-100')}  onClick={createComment}>Create</button>
             
     </form>
   )
 }


