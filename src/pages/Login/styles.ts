import styled from 'styled-components'

export const Container = styled.div`
	height: 100vh;

	background-image: linear-gradient(
			to bottom,
			rgb(0 0 0 / 100%),
			rgb(0 0 0 / 10%)
		),
		url('src/assets/bg.jpg');
	background-size: cover;
	background-position: right;
	padding: 3rem;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

export const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 2rem;
	color: ${(props) => props.theme.white};
	margin-bottom: 3rem;

	@media (min-width: 768px) {
		svg {
			scale: 1.5;
		}
	}
`

export const Button = styled.button`
	background: transparent;
	color: ${(props) => props.theme.white};
	outline: none;
	border: none;

	cursor: pointer;
`

export const SignUpWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	gap: 0.4rem;

	h3 span {
		color: ${(props) => props.theme['red-500']};
		cursor: pointer;
	}

	@media (min-width: 768px) {
		font-size: 1.4rem;
	}
`
export const Headline = styled.h1`
	color: ${(props) => props.theme.white};
	line-height: 150%;

	@media (min-width: 768px) {
		text-align: center;
		font-size: 4rem;
	}
`

export const LoginForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	input {
		height: 4rem;
		padding: 1rem;
		outline: none;
		border: none;
		border-radius: 4px;

		font-size: 1.4rem;
		font-weight: bold;
	}

	button {
		height: 4rem;
		background: ${(props) => props.theme['red-500']};
		border: none;
		outline: none;
		border-radius: 4px;

		color: ${(props) => props.theme.white};
		font-weight: bold;
		font-size: 1.4rem;

		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.8rem;

		cursor: pointer;
	}

	span {
		color: ${(props) => props.theme.white};
		font-size: 1.2rem;
	}

	@media (min-width: 768px) {
		width: 30vw;
		margin: auto;
	}
`
