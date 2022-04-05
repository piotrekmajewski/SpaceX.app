import React from 'react';
import styles from './Header.module.css';

function Header() {
	return (
		<div className={styles.header}>
			<img className={styles.logo} src='./assets/spacex.svg' alt='LOGO' />
		</div>
	);
}

export default Header;
