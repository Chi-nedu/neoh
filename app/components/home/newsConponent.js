"use client"
import Link from 'next/link'
import styles from './home.module.css'
import Linkorbutton from '../common/Linkorbutton'
import Image from 'next/image'
import { useEffect, useState } from 'react'

function NewsConponent() {
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
        <div className='flex mb-8'>
            <h1 className={styles.newsHead}>nedu boi</h1>
            <div className='border-l-[1.4rem] border-t-[2.4rem] border-l-[rgb(59,59,59)] border-t-[transparent]'></div>
        </div>
        <Link id="mouseThing" className={styles.newsLink} href={'/'}>Neoh's nft adoption is a joke to you ahbi</Link>
        <p className={styles.newsText}>this thing no fit hard atv alll</p>
        <Linkorbutton
            href={'/'}
            text={'read more'}/>

        <div style={{left: mousePosition.left+20, top: mousePosition.right+20}}  className={styles.newsImageContainer}>
            <Image
                className={styles.newsImage} 
                id="mouseThing"
                src={`/images/4523.webp`}
                objectFit='cover'
                fill/>
        </div>
    </div>
  )
}

export default NewsConponent