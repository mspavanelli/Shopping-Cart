import { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'

import theme from 'theme'

import { makeServer } from '../miragejs/server'

console.log(process.env.NODE_ENV)

if (process.env.NODE_ENV === 'development') {
  makeServer({ environment: 'development' })
}

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
