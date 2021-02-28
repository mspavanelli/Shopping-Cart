import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Search from './Search'

const searchProduct = jest.fn()

const renderSearchComponent = () => {
  render(<Search searchProduct={searchProduct} />)
}

describe('Search', () => {
  it('should render a form', () => {
    renderSearchComponent()

    expect(screen.getByRole('form')).toBeInTheDocument()
  })

  it('should call props.searchProduct() when form is submitted', () => {
    renderSearchComponent()

    const form = screen.getByRole('form')

    fireEvent.submit(form)

    expect(searchProduct).toBeCalledTimes(1)
  })

  it('should call props.searchProduct() with user input', () => {
    renderSearchComponent()

    const userInput = 'example name'

    const form = screen.getByRole('form')
    const input = screen.getByRole('searchbox')

    userEvent.type(input, userInput)
    fireEvent.submit(form)

    expect(searchProduct).toBeCalledWith(userInput)
  })

  it('should search field with type search', () => {
    renderSearchComponent()

    const searchField = screen.getByRole('searchbox')

    expect(searchField).toHaveProperty('type', 'search')
  })
})
