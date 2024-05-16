import { render, screen } from '../tests/testUtils'; // Import the custom render function
import App from './App'
import { describe, it, expect } from 'vitest'

describe('App', () => {
  it('renders the App component', () => {
    render(<App />)
    
    screen.debug(); // prints out the jsx in the App component unto the command line
  })
})


// describe('A truthy statement', () => {
//   it('should be equal to 2', () => {
//     expect(1+1).toEqual(2)
//   })
// })