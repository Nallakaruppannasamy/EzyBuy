import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler = (event) =>{
        event.preventDefault();
    }

  return (
    <div className='text-center p-6 max-w-4xl mx-auto'>
      <p className='text-2xl font-bold text-gray-800 mb-4'>Subscribe now & get 20% off</p>
      <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit perferendis molestiae ratione aut?</p>
      <form onSubmit={onSubmitHandler} className='w-full flex flex-col sm:flex-row items-center gap-2 my-4'>
        <input className='w-full sm:flex-1 px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-black' type="email" placeholder='Enter Your Email...' required/>
        <button type='submit' className='w-full sm:w-auto bg-black text-white font-medium px-8 py-3 hover:bg-gray-800 transition-colors'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsLetterBox
