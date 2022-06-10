import { AppProps } from 'next/app'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import { GlobalProvider } from 'context/GlobalContext'

import theme from 'styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>

      <Head>
        <title>My boilerplate</title>
        <link rel="shortcut icon" href="/img/favicon.svg" />
        <link rel="apple-touch-icon" href="/img/favicon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Boilerplate" />
      </Head>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </GlobalProvider>
  )
}

export default MyApp
