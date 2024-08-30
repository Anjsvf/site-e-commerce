import React, { useContext, useState } from 'react'
import Title from '../Components/Title'
import CartTotal from '../Components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../Context/ShopContext'

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod')
  const  {navigate } = useContext(ShopContext)
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t  '>
        <div className='flex flex-col gap-4 w-full  sm:max-w-[480px]'>
           <div className='text-xl sm:text-2x1 my-3 '>
               <Title text1={'informações de '} text2={'entrega'}/>
           </div>
           <div className='flex gap-3 '>
               <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='seu nome' />
               <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='sobre nome' />
           </div>
           <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='seu email' />
           <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Rua' />
           <div className='flex gap-3 '>
               <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Cidade' />
               <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='estado' />
           </div>
           <div className='flex gap-3 '>
               <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='z-code' />
               <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='pais' />
           </div>
           <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Telefone' />
        </div>   
        <div className='mt-8 '>
          <div className='mt-8 min-w-80'>
              <CartTotal/>
          </div>
          <div className='mt-12 '>
             <Title text1={'metodo de '} text2={'pagammento'}/>
             <div className=' flex flex-col gap-3 lg:flex-row  '>
              <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer  '>
                    <p className={`min-w-3.5 h-3.5 border rounded-full  ${method === 'stripe' ? 'bg-pink-600': ''} `}></p>
                    <img className='h-5 mx-4  ' src={assets.stripe_logo} alt="" />
              </div>
              <div  onClick={()=>setMethod('razorpay')}className='flex items-center gap-3 border p-2 px-3 cursor-pointer  '>
                    <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-pink-600': ''} `}></p>
                    <img className='h-5 mx-4  ' src={assets.razorpay_logo} alt="" />
              </div>
              <div  onClick={()=>setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer  '>
                    <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-pink-600': ''} `}></p>
                  <p className='text-gray-500 text-sm font-medium mx-4'>pagameto fisico</p>
              </div>

             </div>

             <div className='w-full text-end mt-8 '>
                <button onClick={()=>navigate('/orders')} className='bg-black text-white px-16 py-3 text-sm '>orde de pagamento</button>
             </div>
          </div>
        </div>   
    </div>
  )
}

export default PlaceOrder