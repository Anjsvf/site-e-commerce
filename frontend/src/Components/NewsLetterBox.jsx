import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler = (e) =>{
       e.preventDefault()
    }
  return (
    <div className='text-center '>
        <p className='text-2x1 font-medium text-gray-800 '>inscreva-se agora e ganhe 30% de desconto</p>
        <p className='text-gray-400 mt-3 '>
            Lorem ipsum dolor sit amet consectetu Culpa repellendus maiores dolores facilis autem dolore eius sapiente.
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
           <input className='w-full  sm:flex-1 outline-none ' type="email" placeholder='seu email' required />  
           <button className='bg-black text-white text-xs px-10 py-4' type='submit'>inscrever-se</button>
        </form>
    </div>
  )
}

export default NewsLetterBox
