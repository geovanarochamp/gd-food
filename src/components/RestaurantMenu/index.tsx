import { ItemMenu } from '../ItemMenu'
import { Container, ItemsWrapper, MenuContent } from './styles'

export function RestaurantMenu() {
	return (
		<Container>
			<MenuContent>
				<h3>Pratos</h3>
				<ItemsWrapper>
					<ItemMenu
						itemName={'Strogonoff'}
						itemCover={
							'https://media-cdn.tripadvisor.com/media/photo-s/05/08/5b/7e/r3-express-food.jpg'
						}
					/>
					<ItemMenu
						itemName={'Bife à cavalo'}
						itemCover={
							'https://www.minervafoods.com/wp-content/uploads/2020/11/bife_a_cavalo.jpg'
						}
					/>
				</ItemsWrapper>
			</MenuContent>

			<MenuContent>
				<h3>Bebidas</h3>
				<ItemsWrapper>
					<ItemMenu
						itemName={'Água'}
						itemCover={
							'https://http2.mlstatic.com/D_NQ_NP_800831-MLU47587972258_092021-O.jpg'
						}
					/>
					<ItemMenu
						itemName={'Refrigerante'}
						itemCover={
							'https://zavod.com.br/wp-content/uploads/2021/06/Refrigerentes.jpg'
						}
					/>
				</ItemsWrapper>
			</MenuContent>
		</Container>
	)
}
