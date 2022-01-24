import { screen, render, waitForElementToBeRemoved } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

test('Should render the header', async () => {
  render(<App />)

  const meet = screen.getByText(/meet/i)
  expect(meet).toBeInTheDocument()

  const name = await screen.findByText(/vonta/i)
  expect(name).toBeInTheDocument()

  const img = await screen.findByAltText(/alchemy/i)
  expect(img).toBeInTheDocument()
})
