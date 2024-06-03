import React from 'react'
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNjY2M2NzgxODQ0MjAwMTUzNzU3NWIiLCJpYXQiOjE3MTczNDU2NzAsImV4cCI6MTcxODU1NTI3MH0.QvsJVXMuTEcw1P38lKHWZeQZP1l6JaA3TN38wAUntGw';
const url = 'https://striveschool-api.herokuapp.com/api/comments/';


export default function UpdateComment({asin, comments, setComments}) {

    //Put

    const updateComment = (newText, newRate) => {
        fetch(url+ asin, {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${key}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({comment: newText, rate: newRate })
         })
         .then((response) => response.json())
         .then((data) => {
             setComments([comments.map(comment => comment.asin === asin ? data : comment)])
             setValoreInput('');
             setRate(0)
         })
         .catch((error) =>
             console.error("Errore", error)
           )
       }

  return (
    <button className='bg-slate-800 text-pink-400 hover:bg-pink-400 hover:text-slate-800 h-[40px] font-bold' onClick={() => updateComment(comments.asin, prompt('newText:',comments.comment) )}>Update</button>
  )
}
