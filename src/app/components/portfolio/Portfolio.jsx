import React from 'react'

import Image from 'next/image';
import web1 from "../../../../public/web1.png";
import web2 from "../../../../public/web2.png";
import web3 from "../../../../public/web3.png";
import web4 from "../../../../public/web4.png";
import web5 from "../../../../public/web5.png";
import web6 from "../../../../public/web6.png";
import PortfolioImage from './PortfolioImage';

const PortfolioPNG = [
  {
    src: web1,
    url: "http://ku-fes.com/2018/"
  },
  {
    src: web2,
    url: "http://www.flyworld.jp/"
  }
];

const Portfolio = () => {
  return (
    <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>Portfolio</h3>
            
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            {
              PortfolioPNG.map((image) => <PortfolioImage src={image.src} url={image.url = "#"} />)
            }
            
          </div>
        </section>
  )
}

export default Portfolio