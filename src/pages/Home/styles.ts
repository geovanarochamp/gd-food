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

	@media (min-width: 540px) {
		display: flex;
		justify-content: center;
	}
`

export const Header = styled.header`
	padding: 5rem 3rem;

	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2rem;

	h1 {
		color: ${(props) => props.theme.white};
		font-size: 3.6rem;
	}

	img {
		height: 12rem;
	}
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
