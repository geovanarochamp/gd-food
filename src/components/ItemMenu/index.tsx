import { Container, InfoContent, InfoWrapper } from './styles'

type ItemMenuProps = {
	item: {
		id: number
		name: string
		description: string
		type: string
		item_image: string
		price: number
	}
}

export function ItemMenu(data: ItemMenuProps) {
	const price = data?.item?.price

	return (
		<Container>
			<img src={data.item.item_image} alt="" />
			<InfoContent>
				<InfoWrapper>
					<strong>{data.item.name}</strong>
					<span>{data.item.description}</span>
				</InfoWrapper>

				<span>
					R$ {price ? data?.item?.price?.toFixed(2).replace('.', ',') : 0}
				</span>
			</InfoContent>
		</Container>
	)
}
