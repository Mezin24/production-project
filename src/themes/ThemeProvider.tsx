import { FC, useMemo, useState } from "react"
import { LOCAL_STORAGE_KEY_NAME, Theme, ThemeContext } from "./ThemeContext"

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_KEY_NAME) as Theme || Theme.LIGHT

export const ThemeProvider: FC = ({children}) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const value = useMemo(() => ({
    theme,
    setTheme
  }), [theme])
  
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}