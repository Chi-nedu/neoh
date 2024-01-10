import Image from 'next/image'
import style from './home.module.css'

function About() {
  return (
    <div className={`${style.aboutContainer}`}>
        <div className={`${style.innerAboutContainer}`}>
            About
        </div>
    </div>
  )
}

export default About

export const imageBox = (img) =><div>
    <Image src={img} fill/>
</div>

export const textBox =(title, mainText, button)=><div>
    <div>
        <h1>{title}</h1>
        <div>
            na line dey here shaa
        </div>
    </div>
    <div>
        <p>{mainText}</p>
    </div>
</div>