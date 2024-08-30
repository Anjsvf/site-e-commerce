import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../Components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
         <div className='text-center text-2x1 pt-10  border-t '>
           <Title text1={'nosso'} text2={'contatos'}/>
         </div>
         <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 '>
              <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
              <div className='flex flex-col justify-center items-start gap-6 '>
                   <p className='font-semibold text-xl text-gray-600'>nossa loja</p>
                   <p className='text-gray-500'>Rua x 3488d bairro x <br />quadra 56 brasil</p>
                   <p className='text-gray-500'>tel:790997970</p>
                   <p className='font-semibold text-xl text-gray-600'>xx</p>
                   <p className='text-gray-500'>leia mais sobree nosso time </p>
                   <button className='border border-black px-8 py-4 text-sm hover:bg-black  hover:text-white transition-all duration-500'>busque trabalhos</button>
              </div>
         </div>
         <NewsLetterBox/>
    </div>
  )
}

export default Contact