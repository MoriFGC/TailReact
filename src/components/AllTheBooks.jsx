import React from 'react'

 function AllTheBooks(props) {
    console.log(props.books);
  return (
    <main className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3  mt-5'>
       {props.books.map((book) => (
        <div className='bg-slate-800 h-[425px] w-[250px] text-white mx-auto rounded-[10px]'>
            <div className='h-[300px] w-full'>
                <img className='w-full h-full rounded-t-[10px]' src={book.img} alt="book" />
            </div>
            <div className='flex flex-col items-center gap-2 p-2'>
                <span className='text-center font-bold text-[20px] text-ellipsis whitespace-nowrap overflow-hidden w-full'>
                    {book.title}
                </span>
                <span className='capitalize text-[15px] text-gray-400 hover:text-pink-400'>
                    {book.category}
                </span>
                <span className='text-gray-400 hover:text-pink-400'>
                    {book.price}$
                </span>

            </div>
        </div>
      ))}
    </main>

  )
}

export default AllTheBooks;