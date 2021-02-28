import { Box, Container } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box as='footer' bg='gray.700' color='gray.100' paddingY='8'>
      <Container textAlign='center'>
        &copy; 1994-{new Date().getFullYear()} Matheus Pavanelli | Todos os
        direitos revervados
      </Container>
    </Box>
  )
}

export default Footer
