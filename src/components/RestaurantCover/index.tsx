import { Container, RestaurantInfo, RestaurantWrapper } from './styles'

type RestaurantThumbProps = {
	restaurantName: string
}

export function RestaurantCover({ restaurantName }: RestaurantThumbProps) {
	return (
		<Container>
			<img
				src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
				alt=""
			/>

			<RestaurantWrapper>
				<img
					src="https://st4.depositphotos.com/1007566/39413/v/600/depositphotos_394136566-stock-illustration-brazil-flag-in-map-flat.jpg"
					alt=""
				/>
				<RestaurantInfo>
					<strong>{restaurantName}</strong>
					<span>Comida Brasileira</span>
				</RestaurantInfo>
			</RestaurantWrapper>
		</Container>
	)
}
