const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNjY2M2NzgxODQ0MjAwMTUzNzU3NWIiLCJpYXQiOjE3MTczNDU2NzAsImV4cCI6MTcxODU1NTI3MH0.QvsJVXMuTEcw1P38lKHWZeQZP1l6JaA3TN38wAUntGw';
const url = 'https://striveschool-api.herokuapp.com/api/comments/';

export default function SingleComment({comment, asin, setComments, comments}) {

  //Put

  const updateComment = (newText, newRate) => {
    console.log(asin);

    fetch(url + asin, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${key}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({comment: newText, rate: newRate, elementID: asin })
     })
     .then((response) => response.json())
     .then((data) => {
         setComments([comments.map(comment => comment.asin === asin ? data : comment)])
     })
     .catch((error) =>
         console.error("Errore", error)
       )
   }

  return (
      <li key={asin} className="flex justify-between"><span>{comment.comment}</span><span>Rate: {comment.rate}/5</span>     <button className='bg-slate-800 text-pink-400 hover:bg-pink-400 hover:text-slate-800 h-[40px] font-bold' onClick={() => updateComment(comment.asin, prompt('newText:',comment.comment) )}>Update</button>
      </li>
  )
}