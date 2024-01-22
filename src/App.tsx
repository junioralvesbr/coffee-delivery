import { ThemeProvider } from 'styled-components'
import { Global, defaultTheme } from './styles'
import { Home } from './pages/Home'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Global />
      <Home />
    </ThemeProvider>
  )
}

export default App
