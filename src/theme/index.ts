import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        background: 'gray.50',
      },
    },
  },
  fonts: {
    body: 'Source Sans Pro, sans-serif',
    heading: 'Source Sans Pro, sans-serif',
  },
})

export default theme
