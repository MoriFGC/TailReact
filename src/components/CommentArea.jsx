 import React, { useEffect, useState } from 'react'
 import AddComment from './AddComment';
 import CommentList from './CommentList';
import Spinner from './Spinner';

 const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNjY2M2NzgxODQ0MjAwMTUzNzU3NWIiLCJpYXQiOjE3MTg1NjUzMzYsImV4cCI6MTcxOTc3NDkzNn0.DWqeOIt3TRb7kWyVlZpY29NFwnjtFEPz1e4XNhL02fk';
 const url = 'https://striveschool-api.herokuapp.com/api/books/';

 export default function CommentArea  ({  asin }) {

     const [comments, setComments] = useState([])
     const [spinner, setSpinner] = useState(false)

     useEffect(() => {

      setSpinner(true)

         fetch(url + asin + '/comments/', {
             headers: {
                 'Authorization': `Bearer ${key}`
             }
         })
         .then((response) => response.json())
         .then((data) => {
          setComments(data),
          setSpinner(false)
         })
         .catch(error => console.error('Errore:',error))
         
     }, [asin])
   return (
    
     <>
      {asin && <div className='flex flex-col'>  
       <AddComment comments ={comments} setComments={setComments} asin={asin}/>
       {spinner && <Spinner />}
       <CommentList comments ={comments} asin={asin} setComments={setComments}/>
       </div>}
     </>
     
   )
 }


