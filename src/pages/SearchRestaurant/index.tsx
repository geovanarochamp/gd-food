import { NavigationIcons } from '../../components/NavigationIcons'
import { RestaurantThumb } from '../../components/RestaurantThumb'
import { SearchBar } from '../../components/SearchBar'
import { UserHeader } from '../../components/UserHeader'

export function SearchRestaurant() {
	return (
		<>
			<UserHeader userName={'Fred'} />
			<RestaurantThumb restaurantName={'Restaurante Sem Futuro'} />
			<SearchBar />
			<NavigationIcons />
		</>
	)
}
