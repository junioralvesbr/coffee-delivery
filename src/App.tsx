import { ThemeProvider } from 'styled-components'
import { NavBar } from './components/NavBar'

import { Global, defaultTheme } from './styles'
import { Outlet } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'

function App() {
  return (
    <CartContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <Global />
        <NavBar />
        <Outlet />
      </ThemeProvider>
    </CartContextProvider>
  )
}

export default App
