import SingleComment from "./SingleComment";


export default function CommentList({comments, asin, setComments}) {
    return (
        <>
        
            <ul className=" bg-slate-800 text-white text-ellipsis whitespace-nowrap ">
                
                {comments.map((comment) => (
                    <SingleComment comment={comment} asin = {asin} setComments = {setComments} comments = {comments}/>                    
                ))} 
            </ul>
        </>
    )
}
