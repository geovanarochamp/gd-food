import { NavigationIcons } from '../../components/NavigationIcons'
import { RestaurantCover } from '../../components/RestaurantCover'
import { UserHeader } from '../../components/UserHeader'

export function RestaurantArea() {
	return (
		<>
			<UserHeader userName={'Fred'} />
			<RestaurantCover restaurantName={'Restaurante Sem Futuro'} />
			<NavigationIcons />
		</>
	)
}
