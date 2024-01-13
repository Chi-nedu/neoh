"use client"
import Link from 'next/link'
import styles from './home.module.css'
import Linkorbutton from '../common/Linkorbutton'
import Image from 'next/image'
import { useEffect, useState } from 'react'

function NewsConponent({src, text, title, date, link1, link2}) {
    const [mousePosition, setmousePosition] = useState({left: 0, right: 0})

    useEffect(() => {
        const getMousePosition = document.addEventListener('mousemove',(e)=>{
            setmousePosition({
            left: e.clientX,
            right: e.clientY})

        })
        
        return removeEventListener('mousemove',getMousePosition)
    }, [])

    console.log(mousePosition)

  return (
    <div className={styles.newsCard}>
        <div className='relative mb-10 rounded-md overflow-hidden'>
            <div style={{left: mousePosition.left+20, top: mousePosition.right+20}}  className={styles.newsImageContainer}>
                <Image
                    className={styles.newsImage} 
                    id="mouseThing"
                    src={src}
                    objectFit='cover'
                    fill/>
            </div>
        </div>
        <div className='flex mb-8'>
            <h1 className={styles.newsHead}>{date}</h1>
            <div className='border-l-[1.4rem] border-t-[2.4rem] border-l-[rgb(59,59,59)] border-t-[transparent]'></div>
        </div>
        <Link id="mouseThing" className={styles.newsLink} href={link1}>{title}</Link>
        <p className={styles.newsText}>{text}</p>
        <Linkorbutton
            href={link2}
            text={'read more'}/>
    </div>
  )
}

export default NewsConponent

