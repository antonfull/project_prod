import React from 'react'
import Button, { ThemeButton } from './Button'
import {render, screen} from '@testing-library/react'

describe('classNames', () => {
	test('with only first param', () => {
		render(<Button>Test</Button>);
		expect(screen.getByText('Test')).toBeInTheDocument()
	})
	test("with theme", () => {
    render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
    expect(screen.getByText("Test")).toHaveClass('clear')
	screen.debug()
  });
})