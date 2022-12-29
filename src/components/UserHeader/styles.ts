import styled from 'styled-components'

export const Header = styled.header`
	padding: 3rem 1.5rem 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
	color: ${(props) => props.theme['gray-300']};
	box-shadow: 0 0px 3px rgb(0 0 0 / 24%);
`

export const Button = styled.button`
	background: transparent;
	color: ${(props) => props.theme['gray-300']};
	outline: none;
	border: none;

	cursor: pointer;
`

export const UserInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	text-align: right;
	gap: 0.4rem;

	h3 span {
		display: flex;
		align-items: center;
		gap: 0.4rem;

		color: ${(props) => props.theme['red-500']};
		cursor: pointer;
	}
`
