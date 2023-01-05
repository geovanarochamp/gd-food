import { SignOut } from 'phosphor-react'
import { Content } from './styles'

import { useAuth } from '../../hooks/auth'

export function MyAccount() {
	const { signOut } = useAuth()
	return (
		<>
			<Content>
				<h2>Minha Conta</h2>
				<button onClick={signOut}>
					<SignOut size={20} /> Encerrar sessão
				</button>
			</Content>
		</>
	)
}
