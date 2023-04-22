import { ConnectButton } from '@rainbow-me/rainbowkit';
import styles from '../../styles/Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<div className={styles.logo}>
				<a href='/home'>Logo</a>
			</div>
			<div className={styles.searchBar}>
				<input type='text' placeholder='Search' />

				<ul className={styles.menu}>
					<li>
						<a href='/home'>Home</a>
					</li>
					<li>
						<a href='/market'>Market</a>
					</li>
					<li>
						<a href='/create'>Create</a>
					</li>
				</ul>
			</div>
			<div className={styles.buttons}>
				<ConnectButton />
			</div>
		</nav>
	);
};

export default Navbar;
