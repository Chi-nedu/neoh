
function LineThiny({width= 10, left1='0rem', left2='1rem', left3='2rem', center=false}) {
  return (
    <div style={{width: `${10}rem`}} className={` h-[0.1rem] relative rounded bg-[rgb(116,115,115)] `}>
       <div style={{left: center? `${width/2-0.2}rem`: left1}} className={`w-[0.2rem] h-[0.8rem] -top-[0.35rem]  fixed rounded-md absolute bg-[rgb(116,115,115)] `}>
        </div>
        <div style={{left: left2}} className={`w-[0.2rem] h-[0.5rem] -top-[0.22rem]  fixed rounded-md absolute bg-[rgb(116,115,115)] `}>
        </div>
        <div style={{left: left3}} className={`w-[0.2rem] h-[0.3rem] -top-[0.13rem]  fixed rounded-md absolute bg-[rgb(116,115,115)] `}>
        </div>
        {center && 
        <><div style={{right: left2}} className={`w-[0.2rem] h-[0.6rem] -top-[0.25rem]  fixed rounded-md absolute bg-[rgb(116,115,115)] `}>
        </div>
        <div style={{right: left3}} className={`w-[0.2rem] h-[0.3rem] -top-[0.13rem]  fixed rounded-md absolute bg-[rgb(116,115,115)] `}>
        </div></>}
    </div>
  )
}

export default LineThiny