"use client"
import { ThemeContext } from '@/providers/theme/themeContext';
import React, { useContext, useEffect } from 'react'
import { FiMoon } from "react-icons/fi";
import { FiSun } from "react-icons/fi";

function ThemeToggle() {
  const {themeMode, changeTheme} = useContext(ThemeContext)

  return (
    <div className='flex w-11 h-6 bg-[var(--softTextColor)] rounded-xl relative justify-between items-center px-1 cursor-pointer text-[var(--softBg)]' onClick={() => {changeTheme()}}>
      <FiMoon  size={12}/>
      <FiSun size={12}/>
      <div className={`absolute transition-transform size-4 bg-[var(--bg)] rounded-lg right-1 ${themeMode==="lightTheme" && '-translate-x-5' }`}></div>
    </div>
  )
}

export default ThemeToggle