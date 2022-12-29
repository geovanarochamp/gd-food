import { Link } from 'react-router-dom'
import { House, Ticket, MagnifyingGlass, UserCircle } from 'phosphor-react'
import { Button, Container } from './styles'

export function NavigationIcons() {
	return (
		<Container>
			<Link to="/listrestaurants">
				<Button>
					<House size={20} />
				</Button>
			</Link>
			<Link to="/">
				<Button>
					<Ticket size={20} />
				</Button>
			</Link>
			<Link to="/searchrestaurant">
				<Button>
					<MagnifyingGlass size={20} />
				</Button>
			</Link>
			<Link to="/">
				<Button>
					<UserCircle size={20} />
				</Button>
			</Link>
		</Container>
	)
}
