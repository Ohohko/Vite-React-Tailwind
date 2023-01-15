import React,{useState} from 'react'
import {AiOutlineHome, AiOutlineMenu} from 'react-icons/ai'

const Sidenav =()=> {
  const [nav,setNav]= useState(false)
  const handleNav=()=>{
   setNav(!nav); 
  };
  return (
    <div>
      <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden'/>
      {
        nav ? (
         <div className='fixed w-full h-screen bg-white/90 flex flex=col justify-center items-center z-30'>
          <a href="#main">
            <AiOutlineHome size={20}/>
            <span className='pl-4'>Home</span>
          </a>
          <p>dcdcds</p>
         </div>
        )
        :(
          <div>
          
          </div>
        ) 
      }
    </div>
  )
}

export default Sidenav