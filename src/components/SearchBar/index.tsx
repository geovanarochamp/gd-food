import { Container } from './styles'
import { MagnifyingGlass } from 'phosphor-react'

type SearchBarProps = {
	setSearch: (value: string) => void
}

export function SearchBar({ setSearch }: SearchBarProps) {
	return (
		<Container>
			<input
				type="text"
				onChange={(e) => setSearch(e.target.value)}
				autoFocus
			/>
			<MagnifyingGlass size={20} />
		</Container>
	)
}
