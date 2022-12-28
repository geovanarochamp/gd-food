import { NavigationIcons } from '../../components/NavigationIcons'
import { UserHeader } from '../../components/UserHeader'

export function SearchRestaurant() {
	return (
		<>
			<UserHeader userName={'Fred'} />
			<h1>lista de restaurantes</h1>
			<NavigationIcons />
		</>
	)
}
