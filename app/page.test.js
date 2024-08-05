import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from './page'
 
describe('Home', () => {
  it('renders HomePage', () => {
    render(<Home />)
    const element = screen.getByRole('main')
    expect(element).toBeInTheDocument()
  })
})