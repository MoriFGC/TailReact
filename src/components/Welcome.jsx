import React from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

 function Welcome() {
  return (
    <div className='mx-auto my-4 flex items-center gap-2 w-[150px] md:w-[500px] rounded-[25px] bg-pink-400'>
        <CheckCircleIcon className='w-[40px] '/>
        <span className='text-[20px]'>TailReact</span>
    </div>
  )
}


export default Welcome;
