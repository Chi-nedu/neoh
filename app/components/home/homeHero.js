'use client'
import { motion, useInView } from 'framer-motion'
import style from './home.module.css'
import { useRef } from 'react'
import { HiOutlineArrowLongDown } from "react-icons/hi2";
import Link from 'next/link'
// the remianing stuff here is to add the scroll down thingny

export default function HomeHero() {
    const handleScroll = () =>{
        
    }

  return (
   <main className={style.maxContainer}>
        <main className={style.container}>
            <div className={style.miniContainer}>
                <h1 className={style.herotext}>NEON</h1>
                <AnimatedText className={style.AnimatedText} text={'The collection built by and runby ‘frenify’. Together we are strong than ever.'}/>
            </div>
            <Link href={'#next'} onClick={()=>handleScroll()} id={'mouseThing'} className={style.scroll_down}>
                <HiOutlineArrowLongDown id={'mouseThing'} className={style.scrollingThiny}/> 
                <p id={'mouseThing'} className={style.scrollText}>scroll down</p>
            </Link>
        </main>
    </main>
  )
}
const defaultAnimations ={
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  },
  transition: {
    duration: 0.01,
  }
}

export const AnimatedText =({
  text,
  el: Wrapper = 'p',
  className,
  once
  })=>{

    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 0, once: true})

    return <Wrapper className={className}>
      <span className='sr-only'>{text}</span>
      <motion.span 
        ref={ref}
        initial={'hidden'} 
        animate={isInView? 'visible': "hidden"}
        transition={{staggerChildren: 0.04}} 
        aria-hidden>

        {text.split("").map(char=>
        <motion.span variants={defaultAnimations} aria-hidden>{char}</motion.span>)}
        
      </motion.span>
      
      
    </Wrapper>
  }