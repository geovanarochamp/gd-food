import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	box-shadow: 0 0px 3px rgb(0 0 0 / 24%);

	position: fixed;
	bottom: 0;
	width: 100%;

	@media (min-width: 768px) {
		display: none;
	}
`

export const Button = styled.button`
	background: none;
	border: none;
	outline: none;

	padding: 1rem;
	border-radius: 9999px;

	color: ${(props) => props.theme['gray-500']};
	cursor: pointer;

	&:hover {
		background: ${(props) => props.theme['gray-100']};
	}

	&:active {
		background: ${(props) => props.theme['red-500']};
		color: ${(props) => props.theme.white};
	}
`
