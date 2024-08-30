import React from 'react'
import Title from '../Components/Title'
import {assets} from '../assets/assets'
import NewsLetterBox from '../Components/NewsLetterBox'
const About = () => {
  return (
    <div>
       <div className='text-2x1 text-center pt-8 border-t   '>
           <Title text1={'Sobre'} text2={'Nós'}/>
       </div>
       <div className='my-10 flex flex-col md:flex-row gap-16 '>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 '>
             <p>aspernatur quod quisquam corporis, nobis iusto cumque vitae enim amet sunt aliquid qui deleniti perspiciatis ipsa quae placeat minima!</p>
             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, nam tempora </p>
             <b className='text-gray-800'>nossa missão</b>
             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate unde eius fuga explicabo corporis alias quod repudiandae autem provident veritatis inventore, maxime, quia possimus? Sapiente quaerat ratione veritatis sit neque.</p>
          </div>
       </div>
       <div className='text-xl py-4'>
          <Title text1={'porque'} text2={'nossso servicos '}/>
       </div>
       <div className='flex flex-col md:flex-row text-sm mb-20'>
           <div className='flex flex-col border px-10 md:px-16 py-8 sm:py-20 gap-5'>
               <b>qualidade e seguranca</b>
               <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ex ipsa quisquam architecto iusto reprehenderit tempore magnam dolores eum ea. Amet eos reprehenderit autem! Beatae at nesciunt possimus facere error.</p>
           </div>
           <div className='flex flex-col border px-10 md:px-16 py-8 sm:py-20 gap-5'>
               <b>convenicias</b>
               <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ex ipsa quisquam architecto iusto reprehenderit tempore magnam dolores eum ea. Amet eos reprehenderit autem! Beatae at nesciunt possimus facere error.</p>
           </div>
           <div className='flex flex-col border px-10 md:px-16 py-8 sm:py-20 gap-5'>
               <b>Serviço de qualidade</b>
               <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ex ipsa quisquam architecto iusto reprehenderit tempore magnam dolores eum ea. Amet eos reprehenderit autem! Beatae at nesciunt possimus facere error.</p>
           </div>
           
       </div>

       <NewsLetterBox/>
    </div>
  )
}

export default About
