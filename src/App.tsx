import { ThemeProvider } from 'styled-components'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home, Cart, Success } from './pages'

import { Global, defaultTheme } from './styles'
import { Header } from './components/Header'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'cart',
    element: <Cart />,
  },
  {
    path: 'success',
    element: <Success />,
  },
])

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Global />
      <Header />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
