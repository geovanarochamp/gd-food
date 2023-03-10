import styled from 'styled-components'

export const Container = styled.div`
	border-radius: 0 0 8px 8px;
	box-shadow: 0 3px 6px rgb(0 0 0 / 10%);
	overflow: hidden;

	img {
		width: 100%;
		height: 15rem;
		object-fit: cover;
	}
`
export const RestaurantWrapper = styled.div`
	display: flex;
	gap: 2rem;
	padding: 0 1rem 1rem 2rem;

	color: ${(props) => props.theme['gray-500']};
	font-size: 1.2rem;

	img {
		margin-top: -3rem;
		border-radius: 9999px;
		width: 6rem;
		height: 6rem;
	}

	strong {
		margin-top: 4px;
		font-size: 1.4rem;
		color: ${(props) => props.theme['gray-700']};
	}
`

export const RestaurantInfo = styled.div`
	display: flex;
	flex-direction: column;
`

export const InfoWrapper = styled.div`
	margin-top: 4px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 12px;
`
export const InfoContent = styled.div`
	display: flex;
	align-items: center;
	gap: 2px;

	svg {
		color: ${(props) => props.theme['red-500']};
	}
`
