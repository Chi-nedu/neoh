'use client'
import LineThiny from '../common/LineThiny'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import style from './home.module.css'

function WhyChooseUs() {
  const flex_cards = data.map((data, index)=><Card
    number={data.number} 
    title={data.title} 
    text={data.text}
    keyT={index}
    key={index}
    up={data.up}
  />)

  return (
    <div className={style.whyContainer}>
        <div className={`${style.whyContainerInner} width pad`}>
            <h1 className={style.whytitle}>Why choose us?</h1>
            <div className='flex justify-center mb-[4rem]'>
              <LineThiny 
                width={10}
                left1={'0rem'} 
                left2={'4rem'} 
                left3={'2rem'} 
                center={true}/>
            </div>
            <div className={style.whyFlexBox}>
              {flex_cards}
            </div>
        </div>
    </div>
  )
}

export default WhyChooseUs

export const Card =({number, title, text, keyT, up=false})=>{
  return <div key={keyT} className={`${style.whyCard}  ${up && style.cardMarginTop} `}>
    <div className={style.cardTop}>
      <div className={style.box1}></div>
      <p className={style.cardTopText}>{number}</p>
      <div className={style.box2}></div>
    </div>
    <div className={`${style.WhytextBox} bgreenHoverEffect`}>
      <h1 className={style.whyCardTitle}>{title}</h1>
      <AnimatedText className={style.whyCardText} text={text}/>
    </div>
  </div>
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

        {text.split("").map((char, index)=>
        <motion.span key={index} variants={defaultAnimations} aria-hidden>{char}</motion.span>)}
        
      </motion.span> 
      
      </Wrapper>
    }

const data = [
  {
    number: '01',
    title: 'Huge Collection',
    up: true,
    text: 'A collection of 5,000 unique NEOHs built to go beyond the digital space that will unlock numerous benefits for our community.'
  },
  {
    number: '02',
    title: 'High Quality',
    text: "The NEOH collection includes dozens of rare heads, costumes, and colorways of the artist's palette. They are drawn with great care."
  },
  {
    number: '03',
    title: 'Top Resource',
    up: true,
    text: 'Tasty design resources made with care for each pixel. Tokens, NFTs, metaverse and game resources. Access additional drops.'
  },
  {
    number: '04',
    title: 'Big Community',
    text: 'Be part of a community of neoh owners and create user generated items. Rent, advertise, lounch stores, create items.'
  }
]