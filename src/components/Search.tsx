import { useState } from 'react'

import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'

import { FiSearch } from 'react-icons/fi'

interface SearchProps {
  searchProduct(term: string): {}
}

const Search = ({ searchProduct }: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <form name='search-form' onSubmit={() => searchProduct(searchTerm)}>
      <InputGroup data-testid='search' maxWidth='lg' display='block' mx='auto'>
        <InputLeftElement children={<FiSearch />} pointerEvents='none' />
        <Input
          type='search'
          placeholder='Search'
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </InputGroup>
    </form>
  )
}

export default Search
