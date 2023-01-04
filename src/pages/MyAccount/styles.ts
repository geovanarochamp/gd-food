import styled from 'styled-components'

export const Content = styled.div`
	padding: 3rem 1.5rem;

	h2 {
		color: ${(props) => props.theme['red-500']};
		font-size: 1.8rem;
		margin-bottom: 3rem;
	}

	button {
		background: transparent;
		border: none;
		outline: none;
		padding: 0.5rem;
		border-radius: 4px;

		font-size: 1.4rem;
		color: ${(props) => props.theme['gray-700']};

		display: flex;
		align-items: center;
		gap: 0.8rem;

		cursor: pointer;
	}

	button:hover {
		font-weight: bold;
	}

	@media (min-width: 768px) {
		width: 75vw;
		margin: auto;
	}
`
