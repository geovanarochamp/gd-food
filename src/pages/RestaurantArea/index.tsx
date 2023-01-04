import { TabBar } from '../../components/TabBar'
import { RestaurantCover } from '../../components/RestaurantCover'
import { RestaurantMenu } from '../../components/RestaurantMenu'
import { UserHeader } from '../../components/UserHeader'

export function RestaurantArea() {
	return (
		<>
			<UserHeader userName={'Fred'} />
			<RestaurantCover restaurantName={'Restaurante Sem Futuro'} />
			<RestaurantMenu />
			<TabBar />
		</>
	)
}
