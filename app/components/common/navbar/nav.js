'use client'

import { useEffect, useState } from "react"
import style from './nav.module.css'
import Logo from "../logo"
import Nav_menu from "./nav_menu"

function Nav() {
    const [background, setbackground] = useState(false)
    const [toggle, settoggle] = useState(false)
    useEffect(() => {
        window.onscroll = ()=>{
            if (document.body.scrolTop > 10 || document.documentElement.scrollTop > 10) {
              setbackground(true)
            } else {
              setbackground(false)
            }
          }
    }, [])

  return (
    <nav className={`${style.navContainer} ${background && style.navBackground}`}>
        <div className={`pad width ${style.innerContainer} `}>
            <Logo
                className={''}
                id={'mouseThing'}/>
            <button onClick={()=>settoggle(true)} id='mouseThing' className={`${style.toggleNav}`}>
                <p id='mouseThing'>menu</p>
                <div id='mouseThing' className={`${style.toggleDiv}`}>
                    <div id='mouseThing'></div>
                    <div id='mouseThing'></div>
                    <div id='mouseThing'></div>
                </div>
            </button>
        </div>
        <Nav_menu
            settoggle={settoggle}
            toggle={toggle}
            />
    </nav>
  )
}

export default Nav