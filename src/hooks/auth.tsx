import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
	AuthContextData,
	AuthProviderProps,
	ResponseDataProps,
	SignInProps,
} from '../@types/authContextTypes'

import { api } from '../service/api'

export const AuthContext = createContext({} as AuthContextData)

function AuthProvider({ children }: AuthProviderProps) {
	const [data, setData] = useState({} as ResponseDataProps)
	const navigate = useNavigate()

	async function signIn({ email, password }: SignInProps) {
		try {
			const response = await api.post('/sessions', {
				email,
				password,
			})
			const { user, token } = response.data

			localStorage.setItem('@gdfood:user', JSON.stringify(user))
			localStorage.setItem('@gdfood:token', token)

			api.defaults.headers.authorization = `Bearer ${token}`
			setData({ user, token })
			navigate('/')
		} catch (error: any) {
			if (error.response) {
				alert(error.response.data.message)
			} else {
				alert('Não foi possível entrar')
			}
		}
	}

	function signOut() {
		localStorage.removeItem('@gdfood:token')
		localStorage.removeItem('@gdfood:user')

		setData({} as ResponseDataProps)
		navigate('/')
	}

	useEffect(() => {
		const token = localStorage.getItem('@gdfood:token')
		const user = localStorage.getItem('@gdfood:user')

		if (token && user) {
			api.defaults.headers.authorization = `Bearer ${token}`

			setData({ token, user: JSON.parse(user) })
		}
	}, [])

	return (
		<AuthContext.Provider value={{ signIn, signOut, user: data.user }}>
			{children}
		</AuthContext.Provider>
	)
}
function useAuth() {
	const context = useContext(AuthContext)

	return context
}

export { AuthProvider, useAuth }
