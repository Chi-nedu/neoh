import Image from 'next/image'
import style from './pages.module.css'
export default function Home() {
  return (
   <main className={style.container}><p className='pt-[40rem'>a</p>
    {/* <AnimatedText className={'text-[200px] pt-[20rem]'}/> */}
   </main>
  )
}

// export const AnimatedText =({
//   text,
//   el: Wrapper = 'p',
//   className
//   })=>{
//     return <Wrapper className={className}>{text}</Wrapper>
//   }