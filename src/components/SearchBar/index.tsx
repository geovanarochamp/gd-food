import { Container, InputSearch } from './styles'
import { MagnifyingGlass } from 'phosphor-react'

export function SearchBar() {
	return (
		<Container>
			<InputSearch type="text" /> <MagnifyingGlass size={20} />
		</Container>
	)
}
