import styled from 'styled-components'

export const Container = styled.div`
	height: calc(100vh - 28rem);
	margin: 0 3rem;
	overflow: auto;
`
export const MenuContent = styled.div`
	margin-top: 2.4rem;

	h3 {
		font-size: 1.2rem;
		margin-bottom: 1rem;
	}
`

export const ItemsWrapper = styled.div`
	width: fit-content;
	display: flex;
	gap: 2rem;
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
