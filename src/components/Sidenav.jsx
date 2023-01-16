import React,{useState} from 'react'
import {AiOutlineHome, AiOutlineMenu,AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {GrWorkshop} from 'react-icons/gr'
import{SiAboutdotme,SiMaildotru} from 'react-icons/si'
const Sidenav =()=> {
  const [nav,setNav]= useState(false)
  const handleNav=()=>{
   setNav(!nav); 
  };
  return (
    <div>
      <AiOutlineMenu size={35} onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden'/>
      {
        nav ? (
         <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-30'>
          <a href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-200'>
            <AiOutlineHome size={20}/>
            <span className="pl-4">Home</span>
          </a>
          <a href="#work" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-200'>
            <AiOutlineFundProjectionScreen size={20}/>
            <span className="pl-4">Work</span>
          </a>
          <a href="#project" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-200'>
            <GrWorkshop size ={20}/>
            <span className="pl-4">Project</span>
          </a>
          <a href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-200'>
            <SiAboutdotme size={20}/>
            <span className="pl-4">Resume</span>
          </a>
          <a href="#contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-200'>
            <SiMaildotru size={20}/>
            <span className="pl-4">Contact</span>
          </a>
         </div>
        )
        :(
       ''
      )}
     <div className='md:block hidden fixed top-[25%] z-10'>
        <div className='flex flex-col'>
          <a href='#main' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
          <AiOutlineHome size={25}/>            
          </a>
          <a href='#work' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
          <AiOutlineFundProjectionScreen  size={25}/>            
          </a>
          <a href='#project' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
          <GrWorkshop size={25}/>            
          </a>
          <a href='#main' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
          <SiAboutdotme size={25}/>            
          </a>
          <a href='#contact' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
          <SiMaildotru size={25}/>            
          </a>
        </div>
      </div>
</div>
  );
};

export default Sidenav