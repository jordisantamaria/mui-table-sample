import type { AppProps } from 'next/app'
import { ThemeProvider } from '@emotion/react'
import GlobalStyles from '../src/GlobalStyles'
import { theme } from '../src/theme/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return  (
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
    <Component {...pageProps} />
    </ThemeProvider>

  )

}

export default MyApp
