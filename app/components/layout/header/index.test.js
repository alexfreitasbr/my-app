import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Header } from './index'
 
// describe('Identity', () => {
  const newLocal = it('renders Identity', () => {
    render(<Header />)
    const element = screen.getByTestId('main header')
    expect(element).toBeInTheDocument()
})
// })