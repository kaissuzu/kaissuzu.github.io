import React from 'react'

import Image from "next/image";
import design from "../../../../public/design.png";
import code from "../../../../public/code.png";
import consulting from "../../../../public/consulting.png";

import { IoMdSchool } from "react-icons/io";
import { BsPersonWorkspace } from "react-icons/bs";
import { GrTechnology } from "react-icons/gr";

const Services = () => {
  return (
    <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>About</h3>
            
          </div>
          <div className='lg:flex  justify-center gap-10'>
            <div className='text-left shadow-lg p-10 rounded-xl my-10 dark:bg-gray-600'>
              <IoMdSchool className='mx-auto text-8xl'  />
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-white'>Profile</h3>
              <p className='dark:text-white'>1998年 京都府京都市生まれ。</p>
              <p className='dark:text-white'>2017年 関西大学入学</p>
              <p className='dark:text-white'>2021年 フリーランスでコンサルティング事業開始</p>
              <p className='dark:text-white'>2022年 関西大学卒業</p>
              <p className='dark:text-white'>2023年 SIer系企業で詳細設計を行う。</p>
              <h4 className='py-4 text-teal-600'>資格</h4>
              <p className='dark:text-white'>AWS Certified Cloud Practitioner</p>
              <p className='dark:text-white'>Java Silver</p>
              <p className='dark:text-white'>ITパスポート</p>
            </div>
            <div className='text-left shadow-lg p-10 rounded-xl my-10  dark:bg-gray-600'>
              <BsPersonWorkspace className='mx-auto text-8xl' />
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-white'>Work history</h3>
              <h4 className='py-4 text-teal-600'>2021年 コンサルティング</h4>
              <ul>
                <li className='dark:text-white'>京都市内の大学広報に対し、受験へのPR方法を提案・実行</li>
                <li className='dark:text-white'>観光協会に対し、若者の集客方法を分析・提案</li>
              </ul>
              <h4 className='py-4 text-teal-600'>2023年 SIer</h4>
              <ul>
                <li className='dark:text-white'>業務系アプリの詳細設計を担当</li>
              </ul>

            </div>
            <div className='text-left shadow-lg p-10 rounded-xl my-10 dark:bg-gray-600'>
              <GrTechnology className='mx-auto text-8xl' />
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-white'>Skills</h3>
              <h4 className='py-4 text-teal-600'>Frontend</h4>
              <p className='dark:text-white'>HTML/CSS</p>
              <p className='dark:text-white'>JavaScript</p>
              <p className='dark:text-white'>React</p>
              <p className='dark:text-white'>Wordpress</p>
              <h4 className='py-4 text-teal-600'>Backend</h4>
              <p className='dark:text-white'>Java</p>
              <p className='dark:text-white'>C</p>
              <p className='dark:text-white'>AWS</p>
              <p className='dark:text-white'>MySQL</p>
            </div>
          </div>
        </section>
  )
}

export default Services