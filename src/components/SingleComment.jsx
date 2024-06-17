import { useContext } from "react";
import { ThemeContext } from "../modules/Modules";
import ApiAxios from "../modules/ApiAxios";

 export default function SingleComment({comment, setComments, comments}) {

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  let [themeCtx] = useContext(ThemeContext);

   const deleteComment = (commentId) => {
      ApiAxios.delete('/comments/' + commentId)
      .then(() => {setComments(comments.filter(comment => comment._id !== commentId))})
      .catch(error => console.error(error))
   }


   const updateComment = async (commentId, newComment, newRate) => {
      try {
        const response = await ApiAxios.put('/comments/' + commentId, {
          comment: newComment,
          rate: newRate
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
    
        setComments(comments.map(comment => comment._id === commentId ? response.data : comment));
      } catch (error) {
        console.error('Errore', error);
      }
   }
   
    return (
        <li data-testid ="comment" key={comment._id} 
            className={classNames( themeCtx === 'dark' ? 'text-white flex  justify-between' : 'text-black flex  justify-between')}>
              <div className="flex flex-col">
                <span className="me-2">{comment.comment}</span>
                <span>Rate:{comment.rate}/5</span>
              </div>
           
           <div className="flex flex-col gap-1">
            <button className="text-pink-400" onClick={() => deleteComment(comment._id)}>Delete</button>
            <button onClick={() => updateComment (comment._id, prompt('New Name:', comment.comment), prompt('New Rate', comment.rate))}>Update</button>
           </div>
           
         </li>
    )
 }