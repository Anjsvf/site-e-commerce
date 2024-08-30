import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title'

const CartTotal = () => {
    const {currency, delivery_free ,  getCartAmount } = useContext(ShopContext)
  return (
    <div className='w-full '>
      <div className='text-2x1  '>
         <Title text1={'Total do '} text2={'Carrinho'}/>
      </div>
      <div className='flex flex-col gap-2 mt-2 text-sm '>
           <div className='flex justify-between '>
              <p>sub total</p>
              <p>{currency} {getCartAmount()}.00</p>
           </div>
            <hr />
             <div className='flex justify-between'>
                <p>frete grátis</p>
                <p>{currency} {delivery_free}.00</p>
             </div>
             <hr />
             <div className='flex justify-between'>
              <b>Total</b>
              <b>{currency}{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_free }.00</b>
             </div>  
      </div>
    </div>
  ) 
}

export default CartTotal