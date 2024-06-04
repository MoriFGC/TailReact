 const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNjY2M2NzgxODQ0MjAwMTUzNzU3NWIiLCJpYXQiOjE3MTczNDU2NzAsImV4cCI6MTcxODU1NTI3MH0.QvsJVXMuTEcw1P38lKHWZeQZP1l6JaA3TN38wAUntGw';
 const url = 'https://striveschool-api.herokuapp.com/api/comments/';
 export default function SingleComment({comment, setComments, comments}) {
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
        <li key={comment._id} className="flex justify-between">
           <span>{comment.comment}</span>
           <div className="flex gap-1">
            <button className="text-pink-400" onClick={() => deleteComment(comment._id)}>Delete</button>
            <button onClick={() => updateComment (comment._id, prompt('New Name:', comment.comment), prompt('New Rate', comment.rate))}>Update</button>
           </div>
           
         </li>
    )
 }