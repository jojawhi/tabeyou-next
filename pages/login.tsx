import loginStyles from 'styles/Login.module.css';

const login = () => {
	return (
		<div>
			<h1>Login</h1>
			<form className={loginStyles.form}>
				<label htmlFor='email'>Email:</label>
				<input type='email' name='email' id='email' />
				<label htmlFor='password'>Password:</label>
				<input type='password' name='password' id='password' />
			</form>
		</div>
	);
};

export default login;
