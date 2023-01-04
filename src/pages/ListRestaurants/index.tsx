import { TabBar } from '../../components/TabBar'
import { RestaurantThumb } from '../../components/RestaurantThumb'
import { SearchBar } from '../../components/SearchBar'
import { UserHeader } from '../../components/UserHeader'
import { Content } from './styles'
import { SideBar } from '../../components/SideBar'

export function ListRestaurants() {
	return (
		<>
			<UserHeader userName={'Fred'} />
			<Content>
				<RestaurantThumb restaurantName={'Restaurante Sem Futuro'} />
				<SearchBar />
			</Content>
			<TabBar />
			<SideBar />
		</>
	)
}
