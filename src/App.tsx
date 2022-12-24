import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/defaultTheme'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <h1>GD Food</h1>
      </div>
    </ThemeProvider>
  )
}

export default App
