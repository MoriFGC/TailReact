 import React, { useEffect, useState } from 'react'
 import AddComment from './AddComment';
 import CommentList from './CommentList';
 const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNjY2M2NzgxODQ0MjAwMTUzNzU3NWIiLCJpYXQiOjE3MTcxNjAzMTcsImV4cCI6MTcxODM2OTkxN30.bqrIYq7VrpiQgG5X885HS2AfENPgUz0dSGUkrW357Ek';
 const url = 'https://striveschool-api.herokuapp.com/api/books/';
 export default function CommentArea  ({  asin }) {
     const [comments, setComments] = useState([])
     useEffect(() => {
         fetch(url + asin + '/comments/', {
             headers: {
                 'Authorization': `Bearer ${key}`
             }
         })
         .then((response) => response.json())
         .then((data) => setComments(data))
     }, [])
   return (
     <div className='flex flex-col'>
     <AddComment comments ={comments} setComments={setComments} asin={asin}/>
     <CommentList comments ={comments} asin={asin}/>
     </div>
   )
 }


