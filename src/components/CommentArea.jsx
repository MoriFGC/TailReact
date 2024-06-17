 import React, { useEffect, useState } from 'react'
 import AddComment from './AddComment';
 import CommentList from './CommentList';
import Spinner from './Spinner';
import ApiAxios from '../modules/ApiAxios';

 export default function CommentArea  ({  asin }) {

     const [comments, setComments] = useState([])
     const [spinner, setSpinner] = useState(false)

     useEffect(() => {

      setSpinner(true)

        ApiAxios('/books/' + asin + '/comments/')
        .then(response => {
          setComments(response.data),
          setSpinner(false)
        })
        .catch(error => console.error('Error:', error))
         
     }, [asin])
   return (
    
     <>
      {asin && <>  
       <AddComment comments ={comments} setComments={setComments} asin={asin}/>
       {spinner && <Spinner />}
       <CommentList comments ={comments} asin={asin} setComments={setComments}/>
       </>}
     </>
     
   )
 }


