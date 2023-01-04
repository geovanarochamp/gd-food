import { Star, Clock, Ticket } from 'phosphor-react'
import {
	Container,
	InfoContent,
	InfoWrapper,
	RestaurantInfo,
	RestaurantWrapper,
} from './styles'

type RestaurantThumbProps = {
	data: {
		name: string
		description: string
		profile_image: string
		cover_image: string
	}
}

export function RestaurantThumb({ data }: RestaurantThumbProps) {
	return (
		<Container>
			<img src={data.cover_image} alt="" />

			<RestaurantWrapper>
				<img src={data.profile_image} alt="" />
				<RestaurantInfo>
					<strong>{data.name}</strong>
					<span>Comida Brasileira</span>
					<InfoWrapper>
						<InfoContent>
							<Star weight="fill" size={8} /> <span>4,5</span>
						</InfoContent>
						<InfoContent>
							<Clock size={8} /> <span>30-40min</span>
						</InfoContent>
						<InfoContent>
							<Ticket size={8} /> <span>R$4,99</span>
						</InfoContent>
					</InfoWrapper>
				</RestaurantInfo>
			</RestaurantWrapper>
		</Container>
	)
}
