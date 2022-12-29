import styled from 'styled-components'

export const Container = styled.div`
	margin: 0 1.5rem;
`

export const InputSearch = styled.input`
	width: 100%;
	padding: 1rem;

	outline: none;
	border: none;
	border-radius: 8px;
	box-shadow: 0 3px 6px rgb(0 0 0 / 10%);

	background: ${(props) => props.theme['gray-100']};
	font-size: 1.6rem;

	svg {
		color: red;
	}
`
