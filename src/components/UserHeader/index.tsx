/* eslint-disable no-undef */
import { List, MapPin } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { Button, Header, UserInfo } from './styles'

type UserHeaderProps = {
	userName: string
}

export function UserHeader({ userName }: UserHeaderProps) {
	const [formatLocation, setFormatLocation] = useState('Buscando localização')

	function getCurrentLocation() {
		navigator.geolocation.getCurrentPosition((position) => {
			const latitude = position.coords.latitude
			const longitude = position.coords.longitude
			formatCurrentLocation(latitude, longitude)
		})
	}

	async function formatCurrentLocation(latitude: number, longitude: number) {
		const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyAB8WMNzhKwmM8pzDFdQV1X9Vvih1HU_C8`

		await fetch(url)
			.then((response) => response.json())
			.then((data: google.maps.GeocoderResponse) => {
				data.results.map((item) => {
					return item.types.map((type) => {
						return (
							type.includes('route') &&
							item.address_components.map((addressComponent) => {
								return addressComponent.types.map((addressComponentType) => {
									return (
										addressComponentType.includes('route') &&
										setFormatLocation(addressComponent.short_name)
									)
								})
							})
						)
					})
				})
			})
			.catch((error) => {
				console.log(error)
			})
	}

	useEffect(() => {
		getCurrentLocation()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [formatLocation])

	return (
		<Header>
			<Button>
				<List size={25} />
			</Button>

			<UserInfo>
				<h3>Olá, {userName}! Você está neste endereço? </h3>
				<h3>
					<span>
						<MapPin size={15} /> {formatLocation}
					</span>
				</h3>
			</UserInfo>
		</Header>
	)
}
