import { RestaurantProps } from '../../@types/menuTypes'
import { Container, RestaurantInfo, RestaurantWrapper } from './styles'

type RestaurantCoverProps = {
	data: RestaurantProps[]
}

export function RestaurantCover({ data }: RestaurantCoverProps) {
	return (
		<Container>
			<img src={data[0].cover_image} alt="" />

			<RestaurantWrapper>
				<img src={data[0].profile_image} alt="" />
				<RestaurantInfo>
					<strong>{data[0].name}</strong>
					<span>{data[0].description}</span>
				</RestaurantInfo>
			</RestaurantWrapper>
		</Container>
	)
}
