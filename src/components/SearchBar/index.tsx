import { Container } from './styles'
import { MagnifyingGlass } from 'phosphor-react'

export function SearchBar() {
	return (
		<Container>
			<input type="text" /> <MagnifyingGlass size={20} />
		</Container>
	)
}
