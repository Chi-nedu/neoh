import LineThiny from '../common/LineThiny'
import style from './home.module.css'
import NewsConponent from './newsConponent'

function News() {
  return (
    <div className={style.NewsContainer}>
        <div className={`${style.News} width pad py-[8rem]`}>
            <h1 className={style.whytitle}>Neoh&apos;s News</h1>
            <div className='flex justify-center'>
                <LineThiny
                    width={10}
                    left1={'0rem'} 
                    left2={'4rem'} 
                    left3={'2rem'} 
                    center={true}/>
            </div>
            <div className={style.newsFlexBox}>
                <NewsConponent/>
            </div>
        </div>
    </div>
  )
}

export default News