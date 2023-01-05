import React, { useState, useEffect } from 'react'

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
	rate: number
	delivery_time: string
	delivery_fee: number
}

export function ListRestaurants() {
	const [isVisible, setIsVisible] = useState(false)
	const [restaurants, setRestaurant] = useState([] as ResponseDataProps[])
	const [search, setSearch] = useState('')

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
	}, [search])

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
				{isVisible && <SearchBar setSearch={setSearch} />}
			</Content>
			<TabBar isVisible={isVisible} setIsVisible={setIsVisible} />
			<SideBar isVisible={isVisible} setIsVisible={setIsVisible} />
		</>
	)
}
