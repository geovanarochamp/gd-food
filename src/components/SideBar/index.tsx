import { Link } from 'react-router-dom'
import { House, Ticket, MagnifyingGlass, UserCircle } from 'phosphor-react'
import { Button, Container } from './styles'
import { useSearchBar } from '../../hooks/useSearchBar'

export function SideBar() {
	const { isVisible, setIsVisible } = useSearchBar()
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

			<Button onClick={() => setIsVisible(!isVisible)}>
				<MagnifyingGlass size={20} />
			</Button>

			<Link to="/account">
				<Button>
					<UserCircle size={20} />
				</Button>
			</Link>
		</Container>
	)
}
