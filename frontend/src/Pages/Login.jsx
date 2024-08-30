import React, { useState } from 'react'

const Login = () => {
  const [currentState, setCurrentState] =  useState('Sign Up')
  const onSubmitHandler = async (e) =>{
   e.preventDefault()
  }
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 '>
       <div className='inline-flex items-center gap-2 mb-2 mt-10  '>
           <p className='prata-regular text-3x1'>{currentState}</p>
           <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
       </div>
      {currentState === 'Login' ? '' :  <input type="text" className='w-full px-3 py-2 border border-gray-800 ' placeholder='seu nome' required/> } 
       <input type="text" className='w-full px-3 py-2 border border-gray-800 ' placeholder='email' required />
       <input type="password" className='w-full px-3 py-2 border border-gray-800 ' placeholder='senha' required />
       <div className='w-full flex justify-between text-sm mt-[-8px]  '>
           <p className='cursor-pointer'> esqueceu a senha?</p>
           {
            currentState ===  'Login'
            ? <p onClick={()=>setCurrentState('Sign Up')} className='cursor-ponter'>criar uma conta</p>
            : <p onClick={()=>setCurrentState('Login')} className='cursor-ponter'>entar aqui</p>
           }
       </div>
       <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'entrar' : 'Sign Up' }</button>
    </form>
  )
}

export default Login
