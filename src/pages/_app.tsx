import { FC, useCallback } from 'react'
import { AppProps } from 'next/app'

import GlobalStyle from '../styles/global'
import { DefaultTheme, ThemeProvider } from 'styled-components'

import lightTheme from '../styles/themes/light'
import darkTheme from '../styles/themes/dark'

import usePersistedState from '../hooks/usePersistedState'
import { Header } from './components/Header'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', lightTheme);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? darkTheme : lightTheme);
  }, [setTheme, theme.title]);

  return (
    <ThemeProvider theme={theme}>
      <Header setToggleTheme={toggleTheme} />
      <Component {...pageProps} />
      <GlobalStyle />
  </ThemeProvider>
  )
}

export default MyApp
