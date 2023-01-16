import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {FaTwitter,FaFacebookF,FaInstagram,FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
    <img className='w-full h-screen object-cover object-left scale-x-[-1]' src="/src/assets/main-img.jpg" alt="background"/>
     
     <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
     <div className='max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center' >
         <h1 className='sm:text-5xl text-4xl font-bold text-text-5xl extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600'>I'm Ohad Kahlon</h1>
        <h2>Welcome to my React Website
        <TypeAnimation
      sequence={[
        'Java Script', 
        1500,
        'React',
        2000,
        'Deploy With AWS.',
        2000,
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1em' }}
    />   
        </h2>
        <div>
            <FaTwitter    className='cursor-pointer' size={25} />
            <FaFacebookF  className='cursor-pointer' size={25} />
            <FaInstagram  className='cursor-pointer' size={25} />
            <FaLinkedinIn className='cursor-pointer' size={25} />
            
        </div>
     </div>   
     </div>
    </div>
  )
}

export default Main
