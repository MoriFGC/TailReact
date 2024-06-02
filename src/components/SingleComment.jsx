export default function SingleComment({comment, asin}) {
  return (
      <li key={asin}>{comment.comment}</li>
  )
}