import { render, screen } from '@testing-library/react'

import Footer from './Footer'

describe('Footer', () => {
  it('should render footer', () => {
    render(<Footer />)

    expect(screen.getByTestId('page-footer')).toBeInTheDocument()
  })

  it('should display current year on copyright', () => {
    render(<Footer />)

    const currentYear = new Date().getFullYear()

    const regex = new RegExp(`${currentYear}`)

    expect(screen.getByText(regex)).toBeInTheDocument()
  })
})
