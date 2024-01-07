"use client";

import { useState } from "react";

import Toppage from './components/top/Toppage';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <Toppage setDarkMode={setDarkMode} darkMode={darkMode} />
        <Services />
        <Portfolio />
      </main>
    </div>
  )
}
