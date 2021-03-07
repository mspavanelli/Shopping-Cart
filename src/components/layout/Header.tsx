import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
} from '@chakra-ui/react'

import { FiMapPin, FiShoppingCart } from 'react-icons/fi'

const Header = () => {
  return (
    <Box data-testid='page-header' bg='gray.200'>
      <Container
        maxWidth={{
          base: 'container.sm',
          md: 'container.md',
          lg: 'container.lg',
        }}
        paddingY='4'
      >
        <Box>
          <HStack
            justify='space-between'
            align='baseline'
            spacing='0'
            isInline
            isTruncated
          >
            <HStack width='full'>
              <FiMapPin />
              <Text fontSize='sm'>London, UK</Text>
            </HStack>

            <Heading size='lg' width='full' textAlign='center'>
              Shopping Cart
            </Heading>

            <Flex width='full' justify='flex-end'>
              <Button variant='ghost'>
                <FiShoppingCart size='1.25rem' />
              </Button>
            </Flex>
          </HStack>
        </Box>

        <Divider marginY='2' colorScheme='blackAlpha' />

        <Flex as='nav' justify='center'>
          <Stack
            as='ul'
            spacing='10'
            listStyleType='none'
            direction={{ base: 'column', md: 'row' }}
          >
            <li>
              <Button variant='link'>Home</Button>
            </li>
            <li>
              <Button variant='link'>Categories</Button>
            </li>
            <li>
              <Button variant='link'>Contact</Button>
            </li>
          </Stack>
        </Flex>
      </Container>
    </Box>
  )
}

export default Header
