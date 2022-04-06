import React from 'react';
import styles from './Header.module.css';

function Header() {
	return (
		<div className={styles.header}>
			<img className={styles.logo} src='./assets/spacex.svg' alt='LOGO' />
			<div className={styles.btn_wrapper}>
				<button className={styles.button}>Go to favourites</button>
			</div>
		</div>
	);
}

export default Header;
