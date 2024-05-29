import React, { useState } from 'react'
import SingleBook from './SingleBook';
import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/outline';
import fantasy from "/Books/fantasy.json";



 function AllTheBooks(props) {

const [testo, setTesto] = useState('');

    

     function handleChange(value) {
      setTesto(value)
      
      const books = fantasy.filter((book) => {
        return (
          book.title.toLowerCase().includes(value)
        )
      });
      console.log(books);
     };

  return (
    <>
      <div className='bg-white mx-auto w-[20%] rounded-[10px] h-[2.5rem] py-[0px] px-[15px] flex items-center '>
          <input className='bg-transparent border-none h-[100%] text-[1.25rem] w-[100%] ms-[5px] focus:outline-none'
          type='text' 
          placeholder='Search Books...' 
          value={testo} 
          onChange={(e) => handleChange(e.target.value)}
          />
          <MagnifyingGlassCircleIcon className='w-[40px] text-pink-400'/>
        </div>
      <main className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3  mt-5'>
         {props.books.map((book) => ( <SingleBook book = {book}/>))}
      </main>
    </>
    

  )
}

export default AllTheBooks;