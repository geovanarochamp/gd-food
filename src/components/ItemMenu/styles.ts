import styled from 'styled-components'

export const Container = styled.div`
	width: 18rem;

	border-radius: 8px;
	box-shadow: 0 3px 6px rgb(0 0 0 / 10%);
	overflow: hidden;

	img {
		width: 100%;
		height: 15rem;
		object-fit: cover;
	}
`

export const InfoContent = styled.div`
	padding: 1rem;
	display: flex;

	align-items: center;
	justify-content: space-between;

	span {
		font-size: 1.2rem;
		color: ${(props) => props.theme['red-500']};
	}
`

export const InfoWrapper = styled.div`
	margin-top: 4px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	color: ${(props) => props.theme['gray-700']};

	strong {
		font-size: 1.4rem;
	}
	span {
		color: ${(props) => props.theme['gray-700']};
	}
`
