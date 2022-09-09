import Nav from './Nav';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
	return (
		<div>
			<Nav></Nav>
			<main className={styles.main}>{children}</main>
			<footer className={styles.footer}>
				Designed and Developed by Josh White
			</footer>
		</div>
	);
};

export default Layout;
