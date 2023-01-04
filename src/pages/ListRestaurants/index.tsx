import { useState, useEffect } from 'react'

import { TabBar } from '../../components/TabBar'
import { RestaurantThumb } from '../../components/RestaurantThumb'
import { SearchBar } from '../../components/SearchBar'
import { UserHeader } from '../../components/UserHeader'
import { Content } from './styles'
import { SideBar } from '../../components/SideBar'
import { api } from '../../service/api'

type ResponseDataProps = {
	id: number
	name: string
	description: string
	profile_image: string
	cover_image: string
}

export function ListRestaurants() {
	const [restaurants, setRestaurant] = useState([] as ResponseDataProps[])

	useEffect(() => {
		async function fetchRestaurants() {
			const response = await api.get('/restaurants')
			setRestaurant(response.data)
		}

		fetchRestaurants()
	}, [])

	return (
		<>
			<UserHeader userName={'Fred'} />
			<Content>
				{restaurants &&
					restaurants.map((restaurant) => (
						<li key={String(restaurant.id)}>
							<RestaurantThumb data={restaurant} />
						</li>
					))}
				<SearchBar />
			</Content>
			<TabBar />
			<SideBar />
		</>
	)
}
