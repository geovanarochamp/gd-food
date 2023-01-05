import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/defaultTheme'

import { Routes } from './routes'
import { AuthProvider } from './hooks/auth'
import { SearchBarProvider } from './hooks/useSearchBar'

function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<AuthProvider>
				<SearchBarProvider>
					<Routes />
					<GlobalStyle />
				</SearchBarProvider>
			</AuthProvider>
		</ThemeProvider>
	)
}

export default App
