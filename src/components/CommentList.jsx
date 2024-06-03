import SingleComment from "./SingleComment";

export default function CommentList({comments, asin}) {
    return (
        <>
            <ul className=" bg-slate-800 text-white text-ellipsis whitespace-nowrap overflow-hidden ">
                {comments.map((comment) => (
                    <SingleComment comment={comment} asin = {asin}/>
                ))} 
            </ul>
        </>
    )
}
