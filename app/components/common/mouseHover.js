"use client"
import { useEffect, useState } from 'react'
// The colour chould be edited to fit the ui once am going far

function MouseHover() {
    const [mousePosition, setmousePosition] = useState({left: 0, right: 0})

    useEffect(() => {
    const getMousePosition = document.addEventListener('mousemove',(e)=>{
        setmousePosition({
        left: e.pageX -3,
        right: e.pageY -3})
    })

  return removeEventListener('mousemove',getMousePosition)
}, [])
console.log(mousePosition)
  return (
    <div 
        className='rounded-[100%] transition duration-75 border-black border-[0rem] h-[6px] w-[6px] p-[0.8rem]'
        style={{
            position: "fixed", 
            top: `${mousePosition.right-10}px`, 
            left: `${mousePosition.left-10}px`, 
            boxShadow: "0rem 0rem 0.2rem 0.2rem black",
            zIndex: 1000000000000000000000000000000000000000000000000000 }}>
            
    </div>
  )
}

export default MouseHover