import { render, screen } from '@testing-library/react'

import Header from './Header'

describe('Header', () => {
  it('should ', () => {
    render(<Header />)

    expect(screen.getByTestId('page-header')).toBeInTheDocument()
  })
})
