import '../styles.css'

import React, { useEffect } from 'react'

simport { ThemeProviderComponent } from './ThemeProvider.types'

const ThemeProvider: ThemeProviderComponent = ({ children, darkMode = false, theme = {} }) => {
  useEffect(() => {
    document.body.classList.add(darkMode ? 'mode-dark' : 'mode-light')
    document.body.classList.remove(darkMode ? 'mode-light' : 'mode-dark')

    const themeStyles = Object.keys(theme).reduce(
      (newTheme, color) => `${newTheme} --color-${color}: ${theme[color as keyof typeof theme]};`,
      '',
    )

    document.body.style.cssText = themeStyles
  }, [theme, darkMode])

  return <>{children}</>
}

export default ThemeProvider
