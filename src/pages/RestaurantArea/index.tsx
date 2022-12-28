import { NavigationIcons } from '../../components/NavigationIcons'
import { UserHeader } from '../../components/UserHeader'

export function RestaurantArea() {
	return (
		<>
			<UserHeader userName={'Fred'} />
			<h1>área do restaurante</h1>
			<NavigationIcons />
		</>
	)
}
