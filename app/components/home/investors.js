import LineThiny from '../common/LineThiny'
import style from './home.module.css'

function Investors() {
  return (
    <div>
        <div className={`${style.investorsContainer} py-[8rem]`}>
            <div className={`${style.investors} pad width`}>
                <h1 className={style.whytitle}>Neoh&apos;s investors</h1>
                <div className='flex justify-center'>
                    <LineThiny
                        width={10}
                        left1={'0rem'} 
                        left2={'4rem'} 
                        left3={'2rem'} 
                        center={true}/>
                </div>
                <div className={style.investorsFlexBox}>
                    {investorsData.map((data, index)=><Investor
                        key={index}
                        name={data.name}
                        upper={data.class}
                        font={data.font}/>
                    )}
                    {investorsData.map((data, index)=><Investor
                        key={index}
                        name={data.name}
                        upper={data.class}
                        rotate={'rotate-[180deg]'}
                        font={data.font}/>
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Investors

export const Investor = ({name, font, upper, rotate})=>{
    return <div className={style.investor}>
        <p style={{fontFamily: font}} className={`${style.investorText} ${upper} ${rotate}`}>{name}</p>
    </div>
}

const investorsData = [
    {
        name: "Yalgoo",
        font: 'Courier New'
    },{
        name: "Marico",
        font: "'Gill Sans'",
        class: "uppercase"
    },{
        name: "Dalgate",
        font: 'Lucida Sans'
    },{
        name: "Aduyu",
        font: "cursive",
        class: "uppercase"
    },{
        name: "Coldage",
        font: "fantasy"
    }
]