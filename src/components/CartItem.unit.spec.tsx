import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Product from 'types/Product'

import CartItem from './CartItem'

const product: Product = {
  name: 'iMac',
  price: '1200',
  image:
    'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
}

const renderCartItem = () => {
  render(<CartItem product={product} />)
}

describe('ProductCard', () => {
  it('should render product', () => {
    renderCartItem()

    expect(screen.getByTestId('cart-item')).toBeInTheDocument()
  })

  it('should render product name, price and image', () => {
    renderCartItem()

    const image = screen.getByTestId('product-image')

    expect(screen.getByText(new RegExp(product.name, 'i'))).toBeInTheDocument()
    expect(screen.getByText(new RegExp(product.price, 'i'))).toBeInTheDocument()
    expect(image).toHaveAttribute('src', product.image)
    expect(image).toHaveAttribute('alt', product.name)
  })

  it('should display 1 as initial quantity', () => {
    renderCartItem()

    const quantity = screen.getByTestId('quantity').textContent

    expect(quantity).toBe('1')
  })

  it('should increase quantity by 1 when plus button is clicked', async () => {
    renderCartItem()

    const quantity = screen.getByTestId('quantity')

    const [_, plusButton] = screen.getAllByRole('button')

    await userEvent.click(plusButton)

    expect(quantity.textContent).toBe('2')
  })

  it('should decrease quantity by 1 when minus button is clicked', () => {
    renderCartItem()

    const quantity = screen.getByTestId('quantity')

    const [minusButton, plusButton] = screen.getAllByRole('button')

    userEvent.click(plusButton)
    userEvent.click(minusButton)

    expect(quantity.textContent).toBe('1')

    userEvent.click(plusButton)
    userEvent.click(plusButton)
    userEvent.click(minusButton)

    expect(quantity.textContent).toBe('2')
  })

  it('should not go below 1 in quantity', () => {
    renderCartItem()

    const quantity = screen.getByTestId('quantity')

    const [minusButton] = screen.getAllByRole('button')

    userEvent.click(minusButton)
    expect(quantity.textContent).toBe('1')
  })
})
