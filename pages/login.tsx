import { FormEvent, useState } from 'react';
import loginStyles from 'styles/Login.module.css';
import LoginForm from '../components/LoginForm';
import Link from 'next/link';

const Login = () => {
	const [formType, setFormType] = useState(false);

	let email: string;
	let password: string;

	// const handleEmailInput = (event: FormEvent): string => {
	// 	event.preventDefault();

	// 	email = event.target.value;
	// 	console.log(event.target.value, email);
	// };
	// const handleSignIn: MouseEventHandler = (event) => {
	// 	event.preventDefault();
	// 	console.log('sign in clicked');
	// };
	// const handleSignUp: MouseEventHandler = (event) => {
	// 	event.preventDefault();
	// 	console.log('sign up clicked');
	// };

	return (
		<>
			<div className={`${loginStyles.form} ${loginStyles.blueBg}`}>
				<LoginForm />
			</div>

			<div
				className={
					formType === false
						? `${loginStyles.form} ${loginStyles.greenBg} ${loginStyles.slideOut}`
						: `${loginStyles.form} ${loginStyles.greenBg} ${loginStyles.slideIn}`
				}
			>
				<h1>Sign up</h1>
				<form className={`${loginStyles.form} ${loginStyles.whiteBackground}`}>
					<label htmlFor='email'>Email:</label>
					<input type='email' name='email' />
					<label htmlFor='password'>Password:</label>
					<input type='password' name='password' />
					<button
						onClick={() => {
							setFormType(false);
							console.log(formType);
						}}
					>
						Sign up
					</button>
				</form>
			</div>
		</>
	);
};

export default Login;
