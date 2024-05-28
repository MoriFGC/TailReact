import React from 'react'
import SingleBook from './SingleBook';


 function AllTheBooks(props) {
    // console.log(props.books);
  return (
    <main className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3  mt-5'>
       {props.books.map((book) => ( <SingleBook book = {book}/>))}
    </main>

  )
}

export default AllTheBooks;