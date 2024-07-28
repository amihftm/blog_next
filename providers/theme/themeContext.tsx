"use client"
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
  themeMode: "lightTheme",
  changeTheme: () => {},
});

function getThemeFromStorage() {
        if (typeof window !== undefined) {
          const value = window.localStorage.getItem('theme')
          return value || "lightTheme"
    }
}

export function ThemeProvider ({children}: {children:React.ReactNode}) {
    const [theme, setTheme] = useState("lightTheme")

    useEffect(() => {
      if (typeof window !== undefined) {
        const value = window.localStorage.getItem("theme");
        setTheme(value || "lightTheme");
      }
    }, [])

    function changeTheme() {
      if (theme === "lightTheme") {
          setTheme("darkTheme");
          localStorage.setItem("theme", "darkTheme");
        } else {
        setTheme("lightTheme");
        localStorage.setItem("theme", "lightTheme");
      }
    }
    const vls = {
        themeMode: theme,
        changeTheme
    }
    return <ThemeContext.Provider value={vls}>{children}</ThemeContext.Provider>
}