import { Routes, Route } from 'react-router-dom'




export function Router() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/listrestaurants" element={<ListRestaurants />} />
			<Route path="/restaurantarea" element={<RestaurantArea />} />
		</Routes>
	)
}
