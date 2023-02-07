import React, { FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
import loginStyles from 'styles/Login.module.css';
import Link from 'next/link';
import { signInExistingUser } from '../firebase/firebaseUtils';

const LoginForm = () => {
	const [formValues, setFormValues] = useState({ email: '', password: '' });
	const [user, setUser] = useState({});

	const router = useRouter();

	// let formValues = {email: '', password: ''}

	const handleEmailChange = (event: any) => {
		event.preventDefault();

		let email = event.target.value;

		setFormValues({ ...formValues, email: email });
	};

	const handlePasswordChange = (event: any) => {
		let password = event.target.value;

		setFormValues({ ...formValues, password: password });
	};

	const handleSignIn = async (event: any) => {
		event?.preventDefault();

		if (formValues.email && formValues.password) {
			await signInExistingUser(formValues.email, formValues.password).then(userCredential => {
				if (userCredential) {
					setUser(userCredential.user);
					router.push('/dashboard');
				}
			});
		}
	};

	return (
		<div style={{ background: 'lightblue' }}>
			<h2>Already have an account?</h2>
			<form className={loginStyles.form}>
				<div className={loginStyles.form}>
					<label htmlFor='email'>Email:</label>
					<input type='email' name='email' onChange={handleEmailChange} required />
				</div>
				<div className={loginStyles.form}>
					<label htmlFor='password'>Password:</label>
					<input type='password' name='password' onChange={handlePasswordChange} required />
				</div>

				<button onClick={handleSignIn}>Sign in</button>
			</form>
			<p>No account yet?</p>
			<Link href='/signup'>Sign up</Link>
		</div>
	);
};

export default LoginForm;
