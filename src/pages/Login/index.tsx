import { ArrowLeft } from 'phosphor-react'
import { Button, Container, Header, Headline, SignUpWrapper } from './styles'

import { Link } from 'react-router-dom'

export function Login() {
	return (
		<Container>
			<Header>
				<ArrowLeft size={20} />
				<SignUpWrapper>
					<h3>Não tem conta?</h3>
					<h3>
						<span>Cadastre-se</span>
					</h3>
				</SignUpWrapper>
			</Header>
			<Headline>
				Acesse seus
				<br /> restaurantes
				<br /> prediletos
			</Headline>
			<Link to="/login">
				<Button>Entrar</Button>
			</Link>
		</Container>
	)
}
