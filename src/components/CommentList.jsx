import { useContext } from "react";
import { ThemeContext } from "../modules/Modules";
import SingleComment from "./SingleComment";


export default function CommentList({comments,  setComments}) {

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
    
    
      let [themeCtx] = useContext(ThemeContext);

    return (
        <>
        
            <ul  className={classNames('text-white text-ellipsis whitespace-nowrap', themeCtx === 'dark' ? 'bg-slate-800' : 'bg-slate-100 text-black')}>
                
                {comments.map((comment) => ( 
                        <SingleComment comment={comment} key={comment._id} setComments = {setComments} comments = {comments}/>                       
                ))} 
            </ul>
        </>
    )
}
