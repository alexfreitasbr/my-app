import React from "react";
import '@testing-library/jest-dom'
import { render, screen, user} from '@testing-library/react'

import {Input} from './index.tsx'

it('renders Input with all parameters', () => {
    render(<Input label="label" title="title" placeHolder='place holder' message="message" required={true} tooltip="tooltip"/>)

    const checkList =[
        screen.getByRole('textbox'),
        screen.getByText(/title/i),
        screen.getByPlaceholderText(/place holder/i),
        screen.getByText(/obrigatório/i),
        screen.getByText(/message/i),
        screen.getByText(/tooltip/i),
    ]
    
    for (let item of checkList) {
        expect(item).toBeInTheDocument()
    }
})


it('renders Input without all parameters', () => {
    const screens = render(<Input label="label" />)
    const xxx = screens.querySelector('label')

    // const inputNode = screen.getByLabelText('label')
    //     console.log(inputNode)
    
        screen.logTestingPlaygroundURL()
        // expect(container).toHaveClass('text-base text-red-500')
})
