import Image from 'next/image'
import style from './home.module.css'
import LineThiny from '../common/LineThiny'
import Linkorbutton from '../common/Linkorbutton'
import { FaGithubAlt } from 'react-icons/fa'
import nft_details from '@/app/components/common/JSON/nft_data.json'

function LatestPopUp({NftData, setToggleNftData}) {
    const needed_detail = nft_details[`#${NftData}`]
  return (
    <div className={style.latestPopUp}>
        <div className={style.PopUpCard}>
            <div  className={style.imageConatinerLatestPopUp}>
                <Image
                    className={style.imageLatest} 
                    id="mouseThing"
                    src={`/images/${NftData}.webp`}
                    objectFit='cover'
                    fill/>
            </div>
            <div className={style.popUpTextBox}>
                <h1 className={style.PopUptitle}>Neoh #{NftData}</h1>
                <LineThiny/>
                <div className={style.popUpcontent}>
                    {/* we need to cut down this string to 150 words */}
                    <p className={style.popUptext}>{needed_detail.details.substr(0,150)}...</p>
                    <a className={style.popUpLink} id="mouseThing" href='/'>Read More</a>
                </div>
                <Linkorbutton
                    id="mouseThing"
                    // the hashtag here should lead to the page where the nft data is processed please take recognisance of this
                    href={'/'}
                    text={'view my github'}
                    icon={<FaGithubAlt/>} />
            </div>
            <button onClick={()=>setToggleNftData(false)} id='mouseThing' className={`${style.closeNav}`}>
            <p id='mouseThing'>close</p>
            <div id='mouseThing' className={`${style.closeDiv}`}>
                <div className={style.div1} id='mouseThing'></div>
                <div className={style.div2} id='mouseThing'></div>
            </div>
        </button>
        </div>
        
    </div>
  )
}

export default LatestPopUp