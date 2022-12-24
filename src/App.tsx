import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/defaultTheme'

function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />
			<div>
				<h1>GD Food</h1>
			</div>
		</ThemeProvider>
	)
}

export default App
