export type RestaurantProps = {
	id: number
	name: string
	description: string
	profile_image: string
	cover_image: string
	rate: number
	delivery_time: string
	delivery_fee: number
}

export type MenuProps = {
	id: number
	name: string
	description: string
	type: string
	item_image: string
	price: number
}

export type TypesMenuProps = {
	type: string
}
