"use client";
import React from 'react'

import Image from 'next/image';
import deved from "../../../../public/dev-ed-wave.png";

import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsSun } from "react-icons/bs";


const Toppage = ({setDarkMode, darkMode}) => {
  return (
    <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl dark:text-white'>portfolio</h1>
            <ul className='flex items-center'>
              {
                darkMode ? (
                  <li><BsSun onClick={() => {setDarkMode(!darkMode)}} className='cursor-pointer text-3xl text-white' /></li>
                ) : (
                  <li><BsFillMoonStarsFill onClick={() => {setDarkMode(!darkMode)}} className='cursor-pointer text-2xl' /></li>

                )
              }
              {/* <li><BsFillMoonStarsFill onClick={() => {setDarkMode(!darkMode)}} className='cursor-pointer text-2xl' /></li>
              <li><BsSun onClick={() => {setDarkMode(!darkMode)}} className='cursor-pointer text-3xl text-white' /></li> */}
              {/* <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href='#'>Resume</a></li> */}
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>kaissuzu</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Developer and Designer.</h3>
            <p className='text-md py-5 leading-8 text-grya-800 md:text-xl max-w-lg mx-auto dark:text-gray-400'></p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-1 text-gray-600'>
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-8 overflow-hidden md:h-96 md:w-96'>
            <Image src={deved} layout='fill' objectFit='cover' />
          </div>
        </section>
  )
}

export default Toppage;