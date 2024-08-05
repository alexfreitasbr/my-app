import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Layout from './layout'
 
describe('Home', () => {
  it('renders HomePage', () => {
    render(<Layout />)
    const element = screen.getByTestid('main layout')
    expect(element).toBeInTheDocument()
  })
})