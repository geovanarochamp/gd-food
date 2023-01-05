import { useState, useEffect } from 'react'

import { RestaurantThumb } from '../../components/RestaurantThumb'
import { SearchBar } from '../../components/SearchBar'
import { Content } from './styles'
import { api } from '../../service/api'
import { useSearchBar } from '../../hooks/useSearchBar'

type ResponseDataProps = {
	id: number
	name: string
	description: string
	profile_image: string
	cover_image: string
	rate: number
	delivery_time: string
	delivery_fee: number
}

export function ListRestaurants() {
	const [restaurants, setRestaurant] = useState([] as ResponseDataProps[])
	const [search, setSearch] = useState('')
	const { isVisible } = useSearchBar()

	async function fetchRestaurants() {
		const response = await api.get('/restaurants')
		setRestaurant(response.data)
	}

	async function fetchRestaurantsSearch() {
		const response = await api.get(`/restaurants/${search}`)
		setRestaurant(response.data)
	}

	useEffect(() => {
		search ? fetchRestaurantsSearch() : fetchRestaurants()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [search])

	return (
		<>
			<Content>
				{restaurants &&
					restaurants.map((restaurant) => (
						<RestaurantThumb key={String(restaurant.id)} data={restaurant} />
					))}
				{isVisible && <SearchBar setSearch={setSearch} />}
			</Content>
		</>
	)
}
