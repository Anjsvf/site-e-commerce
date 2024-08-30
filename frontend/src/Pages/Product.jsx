import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'
import { assets } from '../assets/assets'
import RelatedProducts from '../Components/RelatedProducts'

const Product = () => {
  const {productId} =  useParams()
  const {products, currency,addToCart} = useContext(ShopContext)
  const  [productData , setProductData] = useState(false)
  const [image, setImage] = useState('')
  const [size , setSize]= useState('')
  
   const fetchProductData =  async ()=>{
        products.map((item)=>{
           if (item._id === productId) {
            setProductData(item)
           setImage(item.image[0])
            
            return null
           }
        })
   }

   useEffect(()=>{
      fetchProductData()
   },[productId, products])
  return productData ? (
    <div className=' border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
          <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row '>
              <div className=' flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between  sm:justify-normal sm:w-[18.7%] w-full  '>
                  {
                    productData.image.map((item,index)=>(
                         <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
                    ))
                  }
              </div>
               <div className='w-full sm:w-[80%] '>
                    <img className='w-full h-auto ' src={image} alt="" />
               </div>
          </div>
          {/* product description  */}
          <div className='flex-1'>
           <h1 className='font-medium text-2x1 mt-2 '>  {productData.name}</h1>
            <div className='flex items-center gap-1 mt-2'>
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_dull_icon} alt="" className="w-3 5" />
                <p className='pl-2'>(122)</p>
            </div>
            <p className='mt-5 text-3x1 font-medium'>{currency}{productData.price}</p>
            <p className='mt-5 text-slate-500 md:w-4/5'>{productData.description}</p>
            <div className='flex flex-col gap-4 my-8'>
                <p>selecione o tamanho</p>
                  <div className=' flex gap-2'>
                      {productData.sizes.map((item,index)=>(
                        <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-600' : ''}`} key={index}>{item}</button>
                      ))}
                  </div>
            </div>
             <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>adicionar ao carrinho</button>
                <hr className='mt-8 sm:w-4/5' />
                 <div className=' flex flex-col gap-1 text-sm text-gray-500 mt-5 '>
                      <p>produto 100% original</p>
                      <p>dinheiro na entrega está disponível neste produto</p>
                      <p>de acordo com a nossa politica de entrega de 7 dias </p>
                 </div>
          </div>
       </div> 
       <div className='mt-20'>
           <div className='flex'>
                <b className=' border px-5 py-3 text-sm '>Descrição</b>
                 <p className='border px-5 py-3 text-sm'>comentários(566)</p>
           </div>
           <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
               
              <p>Lorem ipsum dolor sit amet consectetur adipis debitis veritatis, itaque eius. Voluptatibus animi et molestiae ad!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipis debitis veritatis, itaque eius. </p>
           </div>

       </div>

        <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
       
    </div>
  ):<div className='  opacity-0' >

   </div>
}

export default Product
