import { Link } from 'react-router-dom'
import { House, Ticket, MagnifyingGlass, UserCircle } from 'phosphor-react'
import { Button, Container } from './styles'

type SideBarProps = {
	isVisible: boolean
	setIsVisible: (isVisible: boolean) => void
}

export function SideBar({ isVisible, setIsVisible }: SideBarProps) {
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
