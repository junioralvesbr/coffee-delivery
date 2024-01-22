import { ThemeProvider } from 'styled-components'
import { Global, theme } from './styles'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <h1>hello world</h1>
    </ThemeProvider>
  )
}

export default App
