import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'

import { Global, defaultTheme } from './styles'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Global />
      <Header />
      <Outlet />
    </ThemeProvider>
  )
}

export default App
