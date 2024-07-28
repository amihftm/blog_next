"use client"
import React, { ReactNode, useContext } from 'react'
import { ThemeContext } from '../theme/themeContext'

function BWTheme({children}: {children:ReactNode}) {
    const {themeMode} = useContext(ThemeContext)

  return (
    <div className={`container ${themeMode==="lightTheme"? "lightTheme" :"darkTheme"}`}>{children}</div>
  )
}

export default BWTheme