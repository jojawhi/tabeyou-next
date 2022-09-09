import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Layout.module.css';

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Tabeyou</title>
				<meta name='keywords' content='meal planning, recipes' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Tabeyou</h1>
			</main>
		</div>
	);
};

export default Home;
