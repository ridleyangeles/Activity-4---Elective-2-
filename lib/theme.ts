export const toggleDarkMode = (): string => {
  const currentTheme = localStorage.getItem("theme") || "light"
  const newTheme = currentTheme === "light" ? "dark" : "light"

  if (newTheme === "dark") {
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.remove("dark")
  }

  localStorage.setItem("theme", newTheme)
  return newTheme
}

export const setDarkMode = (isDark: boolean): void => {
  const theme = isDark ? "dark" : "light"

  if (isDark) {
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.remove("dark")
  }

  localStorage.setItem("theme", theme)
}

export const getDarkMode = (): boolean => {
  const theme = localStorage.getItem("theme")
  if (theme) {
    return theme === "dark"
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
}

export const initializeDarkMode = (): string => {
  const theme = localStorage.getItem("theme")
  if (theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.classList.add("dark")
    return "dark"
  } else {
    document.documentElement.classList.remove("dark")
    return "light"
  }
}
