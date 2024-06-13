import React, { useContext, useEffect, useState  } from 'react'
import { Link, useParams } from 'react-router-dom';
import { ThemeContext } from '../modules/Modules';
import CommentArea from '../components/CommentArea';

const BookDetails = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
 
 let [themeCtx] = useContext(ThemeContext);
 
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const url = '/Books/allBooks.json'
        const response = await fetch(url);
        const data = await response.json();
        const foundBook = data.find(book => book.asin === id);

         if (foundBook) {
           setBook(foundBook);
         } else {
           setError('Book not found');
         }

      } catch (error) {
        console.error('Error fetching the book data:', error);
        setError('Error with the data');
      }
    };

    fetchBooks();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
      <div className='w-[400px] mt-[50px] mb-[300px] mx-auto'>
        <div 
         className={classNames(' h-[450px] w-[250px] my-4 mx-auto rounded-[10px]', themeCtx === 'dark' ? 'bg-slate-800 text-white' : 'bg-slate-100')}>
             <div className='h-[300px] w-full'>
                 <img className='w-full h-full rounded-t-[10px]' src={book.img} alt="book" />
             </div>
             <div className='flex flex-col items-center gap-2 p-2'>
                 <span className='text-center font-bold text-[20px] text-ellipsis whitespace-nowrap overflow-hidden w-full'>
                     {book.title}
                 </span>
                 <span className={classNames('capitalize text-[15px]  hover:text-pink-400', themeCtx === 'dark' ? 'text-gray-400' : 'text-black')}>
                     {book.category}
                 </span>
                 <span className='text-gray-400 hover:text-pink-400'>
                     {book.price}$
                 </span>
                 <Link to='/' className='text-center p-[3px] w-[80px] h-[30px] text-[15px] font-bold bg-pink-400 text-slate-800 hover:text-pink-400 hover:bg-slate-800 rounded-[20px]'>
                    Go Back
                 </Link>
             </div>
         </div>
         <CommentArea asin = {id}/>
    </div>
  );
};

export default BookDetails;
