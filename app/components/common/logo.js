import Image from "next/image"
import image from '@/public/images/neon.webp'
import Link from "next/link"

function Logo({height=45, width=45, className={className}, id={id}}) {
  return (
    <Link href={'/'}><Image 
    className={className}
    id={id}
    src={image}
    width={width}
    height={height}/></Link>
  )
}

export default Logo