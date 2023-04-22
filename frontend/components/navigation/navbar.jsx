import { ConnectButton } from '@rainbow-me/rainbowkit';
import styles from '../../styles/Navbar.module.css';
export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<a href='#' target={'_blank'}>
				<img className={styles.logo} src='/404.gif'></img>
			</a>
			<ConnectButton></ConnectButton>
		</nav>
	);
}
