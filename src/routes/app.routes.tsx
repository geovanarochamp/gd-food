import { Routes, Route } from 'react-router-dom'

import { RestaurantArea } from '../pages/RestaurantArea'
import { ListRestaurants } from '../pages/ListRestaurants'
import { MyAccount } from '../pages/MyAccount'
import { DefaultLayout } from '../layouts/DefaultLayout'

export function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<DefaultLayout />}>
				<Route path="/" element={<ListRestaurants />} />
				<Route path="/menu/:id" element={<RestaurantArea />} />
				<Route path="/account" element={<MyAccount />} />
			</Route>
		</Routes>
	)
}
