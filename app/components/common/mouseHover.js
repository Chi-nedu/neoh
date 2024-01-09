"use client"
import { useEffect, useState } from 'react'
// The colour chould be edited to fit the ui once am going far and
// any element that should take the mouse hover effect should be given an id="mouseThing"

function MouseHover() {
    const [mousePosition, setmousePosition] = useState({left: 0, right: 0})
    const [mouseAnimation, setmouseAnimation] = useState(false)

    useEffect(() => {
        const getMousePosition = document.addEventListener('mousemove',(e)=>{
            if (e.target.id === 'mouseThing') {
                setmouseAnimation(false)
            } else{
                setmouseAnimation(true)
            }
            setmousePosition({
            left: e.clientX -3,
            right: e.clientY -3})

        })
        
        return removeEventListener('mousemove',getMousePosition)
    }, [])

    return( 
        <div 
            className={!mouseAnimation? 
                'rounded-[100%] scale_out opacity-[0.2] bg-white/70 border-black border-[0rem] h-[6px] w-[6px] p-[2rem]':
                'rounded-[100%] scale_in border-black border-[0rem] h-[6px] w-[6px] p-[0.8rem]'}
            style={{
                pointerEvents: "none",
                position: "fixed", 
                top: mouseAnimation? `${mousePosition.right-10}px`: `${mousePosition.right-25}px`, 
                left: mouseAnimation? `${mousePosition.left-10}px`: `${mousePosition.left-25}px`, 
                boxShadow: mouseAnimation? "0rem 0rem 0.2rem 0.2rem black": '',
                zIndex: 1000000000000000000000000000000000000000000000000000 }}>
                
        </div>
    )
}

export default MouseHover