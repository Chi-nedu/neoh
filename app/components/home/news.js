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
                {newsData.map((data, index)=><NewsConponent
                    key={index}
                    src={data.src} 
                    text={data.text} 
                    title={data.title} 
                    date={data.date} 
                    link1={data.link1} 
                    link2={data.link2} />)}
            </div>
        </div>
    </div>
  )
}

export default News

const newsData = [
    {
        src: '/images/desktop1.jpg', 
        text: "Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit",
        title: "Neoh's NFT goes public in Nod to crypto adoption", 
        date: "June 21, 2022", 
        link1: "/", 
        link2: '/'
    },
    {
        src: '/images/esktop2.jpg', 
        text: "Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit",
        title: "Neoh's NFT goes public in Nod to crypto adoption", 
        date: "June 21, 2022", 
        link1: "/", 
        link2: '/'
    },
    {
        src: '/images/desktop3.jpg', 
        text: "Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit",
        title: "Neoh's NFT goes public in Nod to crypto adoption", 
        date: "June 21, 2022", 
        link1: "/", 
        link2: '/'
    },
    {
        src: '/images/desktop4.jpg', 
        text: "Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit",
        title: "Neoh's NFT goes public in Nod to crypto adoption", 
        date: "June 21, 2022", 
        link1: "/", 
        link2: '/'
    },
    {
        src: '/images/desktop5.jpg', 
        text: "Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit",
        title: "Neoh's NFT goes public in Nod to crypto adoption", 
        date: "June 21, 2022", 
        link1: "/", 
        link2: '/'
    },
]