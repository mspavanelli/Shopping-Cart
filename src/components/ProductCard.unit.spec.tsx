import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Product from 'types/Product'

import ProductCard from './ProductCard'

const product: Product = {
  name: 'iMac',
  price: '1200',
  image:
    'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
}

const addToCard = jest.fn()

const renderProductCard = () => {
  render(<ProductCard product={product} addToCart={addToCard} />)
}

describe('ProductCard', () => {
  it('should render product', () => {
    renderProductCard()

    expect(screen.getByTestId('product-card')).toBeInTheDocument()
  })

  it('should render product name, price and image', () => {
    renderProductCard()

    expect(screen.getByText(new RegExp(product.name, 'i'))).toBeInTheDocument()
    expect(screen.getByText(new RegExp(product.price, 'i'))).toBeInTheDocument()
    expect(screen.getByTestId('product-image')).toHaveAttribute(
      'src',
      product.image
    )
  })

  it('should call addToCard() method when click on button add', () => {
    renderProductCard()

    const addButton = screen.getByRole('button')

    userEvent.click(addButton)

    expect(addToCard).toBeCalledTimes(1)
    expect(addToCard).toBeCalledWith(product)
  })
})
