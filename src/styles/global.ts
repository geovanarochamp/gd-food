import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
	font-size: 62.5%; /* 10px */
}

:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['red-500']};
}

body {
    color: ${(props) => props.theme['gray-900']};
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 1rem;
}
`
