import {
	MenuProps,
	RestaurantProps,
	TypesMenuProps,
} from '../../@types/menuTypes'
import { ItemMenu } from '../ItemMenu'
import { Container, ItemsWrapper, MenuContent } from './styles'

type DataProps = {
	data: {
		restaurant: RestaurantProps[]
		menu: MenuProps[]
		types: TypesMenuProps[]
	}
}

export function RestaurantMenu({ data }: DataProps) {
	const types = data.types.map((type) => type.type)
	const uniqueTypes = [...new Set(types)]
	return (
		<Container>
			{uniqueTypes.map((type) => (
				<div key={type}>
					<MenuContent>
						<h3>{type}</h3>
						<ItemsWrapper>
							{data.menu.map(
								(item) =>
									item.type === type && (
										<ItemMenu key={item.id} item={item}></ItemMenu>
									),
							)}
						</ItemsWrapper>
					</MenuContent>
				</div>
			))}
		</Container>
	)
}
