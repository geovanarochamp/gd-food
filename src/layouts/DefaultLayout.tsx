import { Outlet } from 'react-router-dom'
import { UserHeader } from '../components/UserHeader'
import { TabBar } from '../components/TabBar'
import { SideBar } from '../components/SideBar'

export function DefaultLayout() {
	return (
		<>
			<UserHeader />
			<TabBar />
			<SideBar />
			<Outlet />
		</>
	)
}
