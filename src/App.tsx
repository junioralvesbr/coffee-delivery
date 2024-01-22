import { ThemeProvider } from 'styled-components'
import { NavBar } from './components/NavBar'

import { Global, defaultTheme } from './styles'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Global />
      <NavBar />
      <Outlet />
    </ThemeProvider>
  )
}

export default App
