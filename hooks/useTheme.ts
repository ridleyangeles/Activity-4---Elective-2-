"use client"

import { useState, useEffect } from "react"
import { toggleDarkMode, initializeDarkMode } from "@/lib/theme"

export const useTheme = () => {
  const [theme, setTheme] = useState("light")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const initialTheme = initializeDarkMode()
    setTheme(initialTheme)
  }, [])

  const toggle = () => {
    const newTheme = toggleDarkMode()
    setTheme(newTheme)
  }

  return { theme, mounted, toggle, isDark: theme === "dark" }
}
