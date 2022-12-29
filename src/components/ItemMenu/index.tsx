import { Container, InfoContent, InfoWrapper } from './styles'

type ItemMenuProps = {
	itemName: string
	itemCover: string
}

export function ItemMenu({ itemName, itemCover }: ItemMenuProps) {
	return (
		<Container>
			<img src={itemCover} alt="" />
			<InfoContent>
				<InfoWrapper>
					<strong>{itemName}</strong>
					<span>Carne, arroz, batata frita</span>
				</InfoWrapper>
				<span>R$21,21</span>
			</InfoContent>
		</Container>
	)
}
