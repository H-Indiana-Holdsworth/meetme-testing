import { screen, render, waitForElementToBeRemoved } from '@testing-library/react'
import Home from './Home'

const user = {
  id: 1,
  created_at: '2021-12-13T00:17:29+00:00',
  name: 'Vonta',
  avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
  header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
  likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
  motto: 'Res Non Verba',
  color: 'crimson',
}

test.only('Should render the user profile', async () => {
  render(<Home user={user} />)

  const { name, motto, color, likes } = user

  const userHeader = await screen.findByAltText('header')
  const avatar = screen.getByAltText('avatar')

  const userName = screen.getByRole('heading', { name })
  const userMotto = screen.getByText(motto)
  const userColor = screen.getByText(color)
  const userInterest = screen.getByRole('heading', { name: /interests/i })
  const userLikes = screen.getByRole('list')

  expect(userHeader).toBeInTheDocument()
  expect(avatar).toBeInTheDocument()
  expect(userName).toBeInTheDocument()
  expect(userMotto).toBeInTheDocument()
  expect(userColor).toBeInTheDocument()
  expect(userInterest).toBeInTheDocument()
  expect(userLikes.children.length).toEqual(likes.length)
})
