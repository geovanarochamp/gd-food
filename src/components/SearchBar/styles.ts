import styled from 'styled-components'

export const Container = styled.div`
	margin: 0 1.5rem;
	display: flex;
	align-items: center;

	position: absolute;
	bottom: 6.4rem;
	width: calc(100% - 3rem);

	background: #f2f2f2;
	border-radius: 8px;
	box-shadow: 0 3px 6px rgb(0 0 0 / 10%);

	input {
		width: 100%;
		padding: 1rem;
		background: transparent;

		outline: none;
		border: none;
		border-radius: 8px;
		font-size: 1.6rem;

		color: ${(props) => props.theme['gray-900']};
	}

	input:focus {
		border: none;
		outline: none;
		box-shadow: 0 0 0 0;
	}

	svg {
		color: ${(props) => props.theme['gray-300']};
		margin-right: 1rem;
	}

	&:focus-within {
		box-shadow: 0 0 0 2px ${(props) => props.theme['red-500']};
	}

	@media (min-width: 768px) {
		width: calc(70vw + 1.5rem);
	}
`
