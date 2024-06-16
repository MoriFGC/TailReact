import { useContext } from "react";
import { ThemeContext } from "../modules/Modules";

 const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNjY2M2NzgxODQ0MjAwMTUzNzU3NWIiLCJpYXQiOjE3MTg1NjUzMzYsImV4cCI6MTcxOTc3NDkzNn0.DWqeOIt3TRb7kWyVlZpY29NFwnjtFEPz1e4XNhL02fk';
 const url = 'https://striveschool-api.herokuapp.com/api/comments/';
 export default function SingleComment({comment, setComments, comments}) {

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  let [themeCtx] = useContext(ThemeContext);

   const deleteComment = (commentId) => {
     fetch(url + commentId, {
       method: 'DELETE',
       headers: {
         'Authorization': `Bearer ${key}`
       }
     })
     .then(() => setComments(comments.filter(comment => comment._id !== commentId)))
     .catch(error => console.error("Errore", error));
   }


   const updateComment = (commentId, newComment, newRate) => {
     fetch(url + commentId, {
       method: 'PUT',
       headers: {
         'Authorization': `Bearer ${key}`,
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({comment: newComment, rate: newRate})
     })
     .then(response => response.json())
     .then(data => setComments(comments.map(comment => comment._id === commentId ? data : comment)))
     .catch(error => console.error("Errore", error));
   }
   
    return (
        <li data-testid ="comment" key={comment._id} 
            className={( themeCtx === 'dark' ? 'text-white flex  justify-between' : 'text-black flex  justify-between')}>
           <span>{comment.comment} Rate:{comment.rate}</span>
           <div className="flex gap-1">
            <button className="text-pink-400" onClick={() => deleteComment(comment._id)}>Delete</button>
            <button onClick={() => updateComment (comment._id, prompt('New Name:', comment.comment), prompt('New Rate', comment.rate))}>Update</button>
           </div>
           
         </li>
    )
 }