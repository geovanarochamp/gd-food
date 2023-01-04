import { Link } from 'react-router-dom'
import { House, Ticket, MagnifyingGlass, UserCircle } from 'phosphor-react'
import { Button, Container } from './styles'

export function TabBar() {
	return (
		<Container>
			<Link to="/">
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
			<Link to="/account">
				<Button>
					<UserCircle size={20} />
				</Button>
			</Link>
		</Container>
	)
}
