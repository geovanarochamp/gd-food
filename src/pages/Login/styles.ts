import styled from 'styled-components'

export const Container = styled.div`
	height: 100vh;

	background-image: linear-gradient(
			to bottom,
			rgb(0 0 0 / 100%),
			rgb(0 0 0 / 0%)
		),
		url('src/assets/bg.jpg');
	background-size: cover;
	padding: 3rem;
`

export const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 2rem;
	color: ${(props) => props.theme.white};
	margin-bottom: 3rem;
`

export const SignUpWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	gap: 0.4rem;

	h3 span {
		color: ${(props) => props.theme['red-500']};
	}
`
export const Headline = styled.h1`
	color: ${(props) => props.theme.white};
	line-height: 150%;
`

export const Button = styled.button`
	background: rgba(0, 0, 0, 0.6);
	color: ${(props) => props.theme.white};
	height: 5rem;
	width: 5rem;

	outline: none;
	border: none;
	border-radius: 9999px;

	position: absolute;
	bottom: 2rem;
	right: 2rem;

	cursor: pointer;
`
