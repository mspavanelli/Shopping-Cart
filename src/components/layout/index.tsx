import { ReactNode } from 'react'

import Head from 'next/head'

import { Grid, Container } from '@chakra-ui/react'

import Header from './Header'
import Footer from './Footer'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Shopping Cart' }: Props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <Grid minH='100vh' templateRows='auto 1fr auto'>
        <Header />
        <Container
          as='main'
          maxWidth={{
            base: 'container.sm',
            md: 'container.md',
            lg: 'container.lg',
          }}
          paddingY='8'
        >
          {children}
        </Container>
        <Footer />
      </Grid>
    </div>
  )
}

export default Layout
