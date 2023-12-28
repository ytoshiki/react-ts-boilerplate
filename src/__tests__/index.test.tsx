import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import App from '../App'

test('「Vite + React」が描画されている', () => {
  render(<App />)
  expect(screen.getByText('Vite + React')).toBeInTheDocument()
})
