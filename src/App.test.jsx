import { screen, render } from '@testing-library/react'
import App from './App'

test('Should render the header', async () => {
  render(<App />)

  const meet = screen.getByText(/meet/i)
  expect(meet).toBeInTheDocument()

  const name = await screen.findByText(/vonta/i)
  expect(name).toBeInTheDocument()

  const img = screen.getByAltText(/alchemy/i)
  expect(img).toBeInTheDocument()

  const bg = screen.getByRole('banner')
  expect(bg).toHaveStyle({
    background: 'var(--grey)',
  })
})
