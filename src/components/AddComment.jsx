 import React, { useState } from 'react'

 const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNjY2M2NzgxODQ0MjAwMTUzNzU3NWIiLCJpYXQiOjE3MTczNDU2NzAsImV4cCI6MTcxODU1NTI3MH0.QvsJVXMuTEcw1P38lKHWZeQZP1l6JaA3TN38wAUntGw';
 const url = 'https://striveschool-api.herokuapp.com/api/comments/';

 export default function AddComment({comments, setComments, asin}) {

     const [valoreInput, setValoreInput] = useState('')
     const [rate, setRate] = useState(0)

     const createComment = (e) => {

      e.preventDefault();

         console.log('fammi vedere se funge', {
          text: valoreInput,
          rate: rate,
          elementId: asin
      });

         const newComment = { comment: valoreInput, rate: rate, elementId: asin};

         fetch(url, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${key}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newComment)
         })
         .then((response) => response.json())
         .then((data) => {
             setComments([...comments, data])
             setValoreInput('');
             setRate(0)
         })
         .catch((error) =>
             console.error("Errore", error)
           )
     }

   return (
     <form className='flex flex-col justify-between' >
         <input className='h-[80px] '
          type="text"
          value={valoreInput}
          onChange={(e) => setValoreInput(e.target.value)}
          />
             <select id="rate" name="rate" value={rate} onChange={(e) => setRate(parseInt(e.target.value))}>
             <option value={0}>Select Rating</option>
               <option value={1}>1</option>
               <option value={2}>2</option>
               <option value={3}>3</option>
               <option value={4}>4</option>
               <option value={5}>5</option>
             </select>
             <button className='bg-slate-800 text-pink-400 hover:bg-pink-400 hover:text-slate-800 h-[40px] font-bold'  onClick={createComment}>Create</button>
     </form>
   )
 }


