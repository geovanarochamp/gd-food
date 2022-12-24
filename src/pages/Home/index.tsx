import { ArrowRight } from 'phosphor-react'
import OpenMouthIMG from '../../assets/open-mouth.png'
import { Button, Container, Header } from './styles'

export function Home() {
	return (
		<Container>
			<Header>
				<h1>
					Quem
					<br /> tem
					<br /> boca
				</h1>
				<img src={OpenMouthIMG} alt="boca aberta" />
			</Header>
			<Button>
				<ArrowRight size={20} />
			</Button>
		</Container>
	)
}
