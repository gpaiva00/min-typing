import { FC, useCallback } from 'react'
import { AppProps } from 'next/app'

import { AnimateSharedLayout } from 'framer-motion'

import GlobalStyle from '../styles/global'
import { DefaultTheme, ThemeProvider } from 'styled-components'

import lightTheme from '../styles/themes/light'
import darkTheme from '../styles/themes/dark'

import usePersistedState from '../hooks/usePersistedState'
import Header from '../components/Header'
import Footer from '../components/Footer'


const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', lightTheme);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? darkTheme : lightTheme);
  }, [setTheme, theme.title]);

  return (
    <AnimateSharedLayout>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header setToggleTheme={toggleTheme} />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </AnimateSharedLayout>
  )
}

export default MyApp
