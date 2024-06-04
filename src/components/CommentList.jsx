import SingleComment from "./SingleComment";


export default function CommentList({comments,  setComments}) {
    return (
        <>
        
            <ul className=" bg-slate-800 text-white text-ellipsis whitespace-nowrap ">
                
                {comments.map((comment) => (
                    <SingleComment comment={comment} key={comment._id} setComments = {setComments} comments = {comments}/>                    
                ))} 
            </ul>
        </>
    )
}
