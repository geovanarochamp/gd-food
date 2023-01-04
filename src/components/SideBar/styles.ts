import styled from 'styled-components'

export const Container = styled.div`
	height: calc(100vh - 7.5rem);
	width: 5.5rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	background: ${(props) => props.theme['red-500']};

	position: fixed;
	bottom: 0;

	@media (max-width: 768px) {
		display: none;
	}
`

export const Button = styled.button`
	background: none;
	border: none;
	outline: none;

	padding: 1rem;
	border-radius: 9999px;

	color: ${(props) => props.theme.white};
	cursor: pointer;
	transition: background 0.3s;

	&:hover {
		background: ${(props) => props.theme['red-700']};
	}
`
