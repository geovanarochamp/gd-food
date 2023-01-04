import { useState } from 'react'
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

import { useAuth } from '../../hooks/auth'

export function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const { signIn } = useAuth()

	function handleSignIn() {
		event.preventDefault()
		signIn({ email, password })
	}

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
				<input
					type="text"
					placeholder="e-mail"
					id="emailInput"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="password"
					placeholder="senha"
					id="passwordInput"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button onClick={handleSignIn}>
					<PaperPlaneRight size={20} /> Entrar
				</button>
				<span>Esqueci minha senha</span>
			</LoginForm>
		</Container>
	)
}
