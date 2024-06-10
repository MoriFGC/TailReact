import { useState } from 'react';
import SingleBook from './SingleBook';
import CommentArea from './CommentArea';

 function AllTheBooks({books, text}) {

  const [selected, setSelected] = useState(false);

  return (
    <>
      
      <main className='flex justify-around  mt-5'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3'>
          {books.filter(book => book.title.toLowerCase().includes(text))
         .map((book) => ( 
         <SingleBook key={book.asin} 
         book = {book} 
         selected={selected} 
         setSelected={setSelected}/>))}
        </div>
         <div >
          <CommentArea asin = {selected} />
         </div>
      </main>
    </>
    

  )
}

export default AllTheBooks;