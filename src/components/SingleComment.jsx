export default function SingleComment({comment, asin}) {
  console.log(comment);
  return (
      <li key={asin} className="flex justify-between"><span>{comment.comment}</span><span>Rate: {comment.rate}/5</span></li>
  )
}