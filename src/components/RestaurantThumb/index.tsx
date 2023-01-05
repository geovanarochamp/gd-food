import { Star, Clock, Ticket } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import {
	Container,
	InfoContent,
	InfoWrapper,
	RestaurantInfo,
	RestaurantWrapper,
} from './styles'

type RestaurantThumbProps = {
	data: {
		id: number
		name: string
		description: string
		profile_image: string
		cover_image: string
		rate: number
		delivery_time: string
		delivery_fee: number
	}
}

export function RestaurantThumb({ data }: RestaurantThumbProps) {
	const navigate = useNavigate()

	function handleOpenMenu(id: number) {
		navigate(`/menu/${id}`)
	}
	return (
		<Container onClick={() => handleOpenMenu(data.id)}>
			<img src={data.cover_image} alt="" />

			<RestaurantWrapper>
				<img src={data.profile_image} alt="" />
				<RestaurantInfo>
					<strong>{data.name}</strong>
					<span>{data.description}</span>
					<InfoWrapper>
						<InfoContent>
							<Star weight="fill" size={15} /> <span>{data.rate}</span>
						</InfoContent>
						<InfoContent>
							<Clock size={15} /> <span>{data.delivery_time}</span>
						</InfoContent>
						<InfoContent>
							<Ticket size={15} />{' '}
							<span>
								{data.delivery_fee > 0
									? 'R$ ' + data.delivery_fee
									: 'Frete grátis'}
							</span>
						</InfoContent>
					</InfoWrapper>
				</RestaurantInfo>
			</RestaurantWrapper>
		</Container>
	)
}
