import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'

import { FiSearch } from 'react-icons/fi'

const Search = () => {
  return (
    <InputGroup maxWidth='lg' display='block' mx='auto'>
      <InputLeftElement children={<FiSearch />} pointerEvents='none' />
      <Input placeholder='Search' />
    </InputGroup>
  )
}

export default Search
