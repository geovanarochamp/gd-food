import { ArrowLeft, PaperPlaneRight } from 'phosphor-react'
import {
	Button,
	Container,
	Header,
	Headline,
	LoginForm,
	SignUpWrapper,
} from './styles'
import { Link } from 'react-router-dom'

export function Login() {
	return (
		<Container>
			<div>
				<Header>
					<Link to="/">
						<Button>
							<ArrowLeft size={20} />
						</Button>
					</Link>
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
			</div>
			<LoginForm>
				<input type="text" placeholder="e-mail" id="emailInput" />
				<input type="text" placeholder="senha" id="passwordInput" />
				<button>
					<PaperPlaneRight size={20} /> Entrar
				</button>
				<span>Esqueci minha senha</span>
			</LoginForm>
		</Container>
	)
}
