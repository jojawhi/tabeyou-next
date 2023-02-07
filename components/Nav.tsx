import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';

const Nav = () => {
	return (
		<nav className={navStyles.nav}>
			<ul>
				<li>
					<Link href='/'>Home</Link>
				</li>
				<li>
					<Link href='/mealPlans'>Meal Plans</Link>
				</li>
				<li>
					<Link href='/recipes'>Recipes</Link>
				</li>
				<li>
					<Link href='/groceryList'>Grocery List</Link>
				</li>
				<li>
					<Link href='/login'>Login</Link>
				</li>
				<li>
					<Link href='/signup'>Sign up</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
