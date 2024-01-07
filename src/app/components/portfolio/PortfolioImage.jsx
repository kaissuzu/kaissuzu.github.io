import React from 'react'
import Image from "next/image";


const PortfolioImage = ({src, url}) => {
  return (
    <div className='basis-1/3 flex-1'>
        <a href={url}>
          <Image src={src} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' />
        </a>
    </div>
  )
}

export default PortfolioImage