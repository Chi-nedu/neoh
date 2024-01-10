import Image from 'next/image'
import style from './home.module.css'
import image1 from '@/public/images/hiroku.webp'
import image2 from '@/public/images/jenson.webp'
import LineThiny from '../common/LineThiny'
import { FaGithubAlt } from 'react-icons/fa'
import Linkorbutton from '../common/Linkorbutton'
import { SiRumble } from 'react-icons/si'

function About() {
  return (
    <div className={`${style.aboutContainer} `}>
        <div className={`${style.innerAboutContainer} width pad`}>
            <div className={style.cardContainer}>
                <ImageBox img={image1}/>
                <TextBox 
                    title={"The Rise of Neoh"}
                    main_text1={"As the first hero of the Neoh Universe, collection has over 9,999 unique skins drawn from the different missions and challenges he faced throughout his life."}
                    main_text2={" The artwork has been hand-drawned by Robert Green in the traditional anime style and composited by Layla Efiyo."}
                    button={<>
                        <Linkorbutton
                            href={'/'}
                            text={'github'}
                            icon={<FaGithubAlt/>} />
                        <Linkorbutton
                        href={'/'}
                        text={'rumble'}
                        icon={<SiRumble/>} /></>}
                />
            </div>
            <div className={style.cardContainer}>
                <TextBox 
                    title={"High Quality NFT Collection"}
                    main_text1={"Simply holding a Neoh will give you access to seasonal airdrops, merchandise, physical and digital artworks, collectibles and more."}
                    main_text2={"We understand the importance of the cross-over between these worlds and we truly believe to bridge these two together. Our goals will always be for the community – creating, building and innovating together with the commmunity."}
                    button={<Linkorbutton
                            href={'/'}
                            text={'more about us'}
                             />}
                />
                <ImageBox img={image2}/>
            </div>
        </div>
    </div>
  )
}

export default About

export const ImageBox = ({img}) =><div className={style.imagebox}>
    <Image src={img} fill className={style.image}/>
</div>

export const TextBox =({title, main_text1, main_text2, button})=><div className={style.text2about}>
    <div className={style.textBox}>
        <h1 className={style.aboutTitle}>{title}</h1>
        <LineThiny/>
    </div>
    <div className={style.AboutText}>
        <p>{main_text1}</p>
        <p>{main_text2}</p>
    </div>
    <div className={style.aboutButtons}>{button}</div>
</div>