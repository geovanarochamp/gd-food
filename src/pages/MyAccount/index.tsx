import { SignOut } from 'phosphor-react'
import { SideBar } from '../../components/SideBar'
import { TabBar } from '../../components/TabBar'
import { UserHeader } from '../../components/UserHeader'
import { Content } from './styles'

import { useAuth } from '../../hooks/auth'

export function MyAccount() {
	const { signOut } = useAuth()
	return (
		<>
			<UserHeader userName={'Fred'} />
			<Content>
				<h2>Minha Conta</h2>
				<button onClick={signOut}>
					<SignOut size={20} /> Encerrar sessão
				</button>
			</Content>
			<TabBar />
			<SideBar />
		</>
	)
}
