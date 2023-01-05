import { createContext, ReactNode, useContext, useState } from 'react'

type SearchBarContextProps = {
	isVisible: boolean
	setIsVisible: (isVisible: boolean) => void
}

export const SearchBarContext = createContext({} as SearchBarContextProps)

type SearchBarProviderProps = {
	children: ReactNode
}

function SearchBarProvider({ children }: SearchBarProviderProps) {
	const [isVisible, setIsVisible] = useState(false)

	return (
		<SearchBarContext.Provider value={{ isVisible, setIsVisible }}>
			{children}
		</SearchBarContext.Provider>
	)
}

function useSearchBar() {
	const context = useContext(SearchBarContext)

	return context
}

export { SearchBarProvider, useSearchBar }
