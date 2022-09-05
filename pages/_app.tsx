import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import {
  Box,
  CircularProgress,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from '@mui/material'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const theme = createTheme()

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const loadStart = (url: string) => url !== router.asPath && setLoading(true)
    const loadComplete = () => setLoading(false)

    router.events.on('routeChangeStart', loadStart)
    router.events.on('routeChangeComplete', loadComplete)
    router.events.on('routeChangeError', loadComplete)

    return () => {
      router.events.on('routeChangeStart', loadStart)
      router.events.on('routeChangeComplete', loadComplete)
      router.events.on('routeChangeError', loadComplete)
    }
  })

  if (loading) {
    return (
      <Box width="100vw" height="100vh" display="flex">
        <CircularProgress size={100} sx={{ m: 'auto' }} />
      </Box>
    )
  } else {
    return (
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>
    )
  }
}

export default MyApp
