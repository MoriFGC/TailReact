import React, { useState } from 'react'
import SingleBook from './SingleBook';

 function AllTheBooks({books, text}) {

  return (
    <>
      
      <main className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3  mt-5'>
         {books.filter(book => book.title.toLowerCase().includes(text))
         .map((book) => ( <SingleBook key={book.asin} book = {book}/>))}
      </main>
    </>
    

  )
}

export default AllTheBooks;