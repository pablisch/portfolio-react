import { render } from '../tests/AppTestUtils'; // Import the custom render function
import App from './App'
import { describe, it, expect } from 'vitest'

describe('App', () => {
  it('should be equal to 2', () => {
    expect(1+1).toEqual(2)
  })

  it('renders the App component', () => {
    render(<App />)
  })
})
