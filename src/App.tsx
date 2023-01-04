import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/defaultTheme'

import { Routes } from './routes'
import { AuthProvider } from './hooks/auth'

function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<AuthProvider>
				<Routes />
				<GlobalStyle />
			</AuthProvider>
		</ThemeProvider>
	)
}

export default App
