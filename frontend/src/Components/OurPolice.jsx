import React from 'react'
import { assets } from '../assets/assets'

function OurPolice() {
  return (
    <div className='flex flex-col ms:flex-row  justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700  '>
       <div>
          <img src={assets.exchange_icon} className='w-12 m-auto bm-5'  alt="" />
          <p className='font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur</p>
       </div>
       <div>
          <img src={assets.quality_icon} className='w-12 m-auto bm-5'  alt="" />
          <p className='font-semibold'>7  dias retorna.</p>
          <p className='text-gray-400'>seguraca em 7 dias da police</p>
       </div>
       <div>
          <img src={assets.support_img} className='w-12 m-auto bm-5'  alt="" />
          <p className='font-semibold'>nosso time de especialista.</p>
          <p className='text-gray-400'>atenderá suas nescessidades</p>
       </div>
    </div>
  )
}

export default OurPolice
