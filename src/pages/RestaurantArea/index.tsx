import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
	MenuProps,
	RestaurantProps,
	TypesMenuProps,
} from '../../@types/menuTypes'

import { RestaurantCover } from '../../components/RestaurantCover'
import { RestaurantMenu } from '../../components/RestaurantMenu'
import { api } from '../../service/api'
import { Content } from './styles'

type DataProps = {
	restaurant: RestaurantProps[]
	menu: MenuProps[]
	types: TypesMenuProps[]
}

export function RestaurantArea() {
	const [data, setData] = useState<DataProps | null>(null)
	const params = useParams()
	useEffect(() => {
		async function fetchMenu() {
			const response = await api.get(`/restaurantmenu/${params.id}`)
			setData(response.data)
		}
		fetchMenu()
	}, [])

	return (
		<>
			{data && (
				<Content>
					<RestaurantCover data={data.restaurant} />
					<RestaurantMenu data={data} />
				</Content>
			)}
		</>
	)
}
