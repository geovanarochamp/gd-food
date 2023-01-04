import { ReactNode } from 'react'

export type AuthProviderProps = {
	children: ReactNode
}

export type SignInProps = {
	email: string
	password: string
}

export type AuthContextData = {
	signIn: ({ email, password }: SignInProps) => Promise<void>
	signOut: () => void
	user: {
		id: number
		name: string
		email: string
		password: string
	}
}

export type ResponseDataProps = {
	user: {
		id: number
		name: string
		email: string
		password: string
	}
	token: string
}
