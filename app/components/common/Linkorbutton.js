import React from 'react'

function Linkorbutton({href, text, icon}) {
  return (
    <a id="mouseThing" href={href} className='flex w-fit justify-around gap-[15px] px-6 button'>
        {icon}
        {icon && <div id="mouseThing" className='w-[0.2rem] overflow-hidden h-[2rem] rounded-md bg-white/30'>
            <div id="mouseThing" className='w-[0.2rem] lineDown h-[2rem] rounded-md bg-[var(--greenHover)]'></div>
        </div>}
        <p id="mouseThing">{text}</p>
    </a>
  )
}

export default Linkorbutton