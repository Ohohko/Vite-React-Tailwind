import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const Main = () => {
  return (
    <div id='main'>
    <img className='w-full h-screen object-cover object-left scale-x-[-1]' src="/src/assets/main-img.jpg" alt="background"/>
     <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
     <div>
        <h1>I'm Ohad Kahlon</h1>
        <h2>Welcome to my React website
        <TypeAnimation
      sequence={[
        'Java Script', 
        1500, // Waits 1s
        'React', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Deploy to Aws.',
        2000, // Types 'Three' without deleting 'Two'
        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em' }}
    />   
        </h2>
     </div>   
     </div>
    </div>
  )
}

export default Main
