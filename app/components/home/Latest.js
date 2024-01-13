"use client"
import Image from 'next/image'
import LineThiny from '../common/LineThiny'
import style from './home.module.css'
import LatestPopUp from './latestPopUp'
import { useState } from 'react'
import Link from 'next/link'

function Latest() {
    const [NftData, setNftData] = useState('')
    const [ToggleNftData, setToggleNftData] = useState(false)

  return (
    <div className={`${style.latest}`}>
        <div className={` pad width `}>
            <h1 className={style.whytitle}>Latest Drops</h1>
            <div className='flex justify-center mb-[4rem]'>
              <LineThiny
                width={10}
                left1={'0rem'} 
                left2={'4rem'} 
                left3={'2rem'} 
                center={true}/>
            </div>
            <div className={style.latestFlexBox}>
                {cardDeatils.map((data, index)=><Card
                    key={index}
                    src={data.src}
                    button={data.button}
                    code={data.code}
                    setNftData={setNftData}
                    setToggleNftData={setToggleNftData} />)
                }
            </div>
            <div className='my-8 w-[100%] '>
            <Link id="mouseThing" className={`${style.see_all} bgreenHoverEffect`} href={'/'}>
                click here to see all items
            </Link>

            </div>
        </div>
        {ToggleNftData && <LatestPopUp
            NftData={NftData}
            setNftData={setNftData}
            setToggleNftData={setToggleNftData} />}
        
    </div>
  )
}

export default Latest

export const Card = ({src, button, code, setNftData, setToggleNftData})=>{
    const handlePopUpToggle = (code)=>{
        setNftData(code)
        setToggleNftData(true)
    }

    return <div className={`${style.latestCard} bgreenHoverEffect`}>
        <div id="mouseThing" className={style.imageConatinerLatest}>
            <Image 
                className={style.imageLatest} 
                id="mouseThing"
                src={src}
                objectFit='cover'
                fill/>
        </div>
        <span className='flex justify-center'>
            <button onClick={()=>handlePopUpToggle(code)} id="mouseThing" className={style.buttonLatest}>{button}</button>
        </span>
    </div>
}

const cardDeatils = [
    {
        button: "Neoh #4527",
        src: '/images/4527.webp',
        code: 4527,
    },
    {
        button: "Neoh #4526",
        src: '/images/4526.webp',
        code: 4526,
    },
    {
        button: "Neoh #4525",
        src: '/images/4525.webp',
        code: 4525,
    }
    ,
    {
        button: "Neoh #4524",
        src: '/images/4524.webp',
        code: 4524,
    },
    {
        button: "Neoh #4523",
        src: '/images/4523.webp',
        code: 4523,
    },
    {
        button: "Neoh #4522",
        src: '/images/4522.webp',
        code: 4522,
    },
    {
        button: "Neoh #4521",
        src: '/images/4521.webp',
        code: 4521,
    },
    {
        button: "Neoh #4520",
        src: '/images/4520.webp',
        code: 4520,
    },
    {
        button: "Neoh #4519",
        src: '/images/4519.webp',
        code: 4519,
    }
]