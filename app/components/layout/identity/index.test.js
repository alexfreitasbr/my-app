import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Identity } from './index'
 
// describe('Identity', () => {
  const newLocal = it('renders Identity', () => {
    render(<Identity />)
    const element = screen.getByTestId('header profile')
    expect(element).toBeInTheDocument()
})
// })