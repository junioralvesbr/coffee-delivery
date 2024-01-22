import { ThemeProvider } from 'styled-components'
import { Global, defaultTheme } from './styles'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Global />
      <h1>hello world</h1>
    </ThemeProvider>
  )
}

export default App
