import './SearchBar.module.css';
import styles from './SearchBar.module.css';

function SearchBar() {
	return (
		<div className={styles.inputs}>
			<div className={styles.searchBar}>
				<input
					type='text'
					placeholder='Sort by date and mission...'
					// onChange={handleOnChange}
					// value={searchValue}
				/>
			</div>
		</div>
	);
}

export default SearchBar;
