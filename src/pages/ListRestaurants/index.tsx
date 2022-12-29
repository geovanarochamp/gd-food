import { NavigationIcons } from '../../components/NavigationIcons'
import { RestaurantThumb } from '../../components/RestaurantThumb'
import { SearchBar } from '../../components/SearchBar'
import { UserHeader } from '../../components/UserHeader'
import { Content } from './styles'

export function ListRestaurants() {
	return (
		<>
			<UserHeader userName={'Fred'} />
			<Content>
				<RestaurantThumb restaurantName={'Restaurante Sem Futuro'} />
				<SearchBar />
			</Content>
			<NavigationIcons />
		</>
	)
}
