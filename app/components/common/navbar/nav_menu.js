import Link from 'next/link'
import style from './nav.module.css'
import { usePathname } from 'next/navigation'
import { FaFacebookF, FaTelegram, FaTwitter, FaYoutube, FaGithubAlt} from "react-icons/fa"
import { ImInstagram } from "react-icons/im"
import { SiRumble } from "react-icons/si";
import { RiSearch2Line } from "react-icons/ri";

function Nav_menu({settoggle, toggle}) {
    const path = usePathname()
    const nav_list = nav_data.map((data, index)=>{
        return <Link 
            id={'mouseThing'} 
            key={index} 
            onClick={()=>settoggle(false)} 
            href={data.href}>
            <li id={'mouseThing'}>
                {data.name}
                {path===data.href && <div id={'mouseThing'} className={style.greenDot}></div>}
            </li>
        </Link>
    })

    return (
    <section className={style.nav_menu}>
        <div className={`${style.hideLeft} ${!toggle && style.hideLeftActive}`}>

        </div>
        <div className={`${style.hideRight} ${!toggle && style.hideRightActive}`}>
           <span>
            <button onClick={()=>settoggle(false)} id='mouseThing' className={`${style.closeNav}`}>
                    <p id='mouseThing'>close</p>
                    <div id='mouseThing' className={`${style.closeDiv}`}>
                        <div className={style.div1} id='mouseThing'></div>
                        <div className={style.div2} id='mouseThing'></div>
                    </div>
                </button>
                
                <ul  className={style.navList}>
                    {nav_list}
                </ul>
           </span>
            <div className={style.nav_footer}>
                <div className={style.mini_socials}>
                    <button id='mouseThing'><FaGithubAlt/><p id='mouseThing' className={style.github}>Github Repo</p></button>
                    <button id='mouseThing'><SiRumble/><p id='mouseThing' className={style.rumble}>Rumble</p> </button>
                </div>
                <form className={style.form}>
                    <input id='mouseThing' placeholder='Serach here...'  type={'text'} className={style.inputBox}/>
                    <button id='mouseThing' className={style.searchbutton}><RiSearch2Line/></button>
                </form>

                <hr/>
                <div className={style.copyright}>
                    <p>copyright {new Date().getFullYear()}-Designed by <a href='https://frenify.com'>frenify</a>, developed by <a href='link to my github'>Chinedu</a></p>
                    <ul>
                        <a id='mouseThing' href='/#'><li><FaFacebookF/></li></a>
                        <a id='mouseThing' href='/#'><li><FaTwitter/></li></a>
                        <a id='mouseThing' href='/#'><li><FaYoutube/></li></a>
                        <a id='mouseThing' href='/#'><li><ImInstagram/></li></a>
                        <a id='mouseThing' href='/#'><li><FaTelegram/></li></a>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Nav_menu
const nav_data=[
    {
        name: "Home",
        href: '/'
    },
    {
        name: "About",
        href: '/about'
    },
    {
        name: "RoadMap",
        href: '/roadmap'
    },
    {
        name: "Blog",
        href: '/blog'
    },
    {
        name: "Contact",
        href: '/contact'
    }
]