import './Table.module.css';
import styles from './Table.module.css';

function Table() {
	return (
		<>
			<div className={styles.wrapper}>
				<table className={styles.table}>
					<thead>
						<tr>
							<th className={styles.favourite}>Favourite</th>
							<th>Data</th>
							<th>Name</th>
							<th className={styles.description}>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className={styles.space}>SpaceX</td>
							<td>SpaceX</td>
							<td>SpaceX</td>
							<td>SpaceX</td>
						</tr>
						<tr>
							<td className={styles.favourite}>SpaceX</td>
							<td>SpaceX</td>
							<td>SpaceX</td>
							<td>SpaceX</td>
						</tr>
						<tr>
							<td className={styles.favourite}>SpaceX</td>
							<td>SpaceX</td>
							<td>SpaceX</td>
							<td>SpaceX</td>
						</tr>
						<tr>
							<td className={styles.favourite}>SpaceX</td>
							<td>SpaceX</td>
							<td>SpaceX</td>
							<td>SpaceX</td>
						</tr>
						<tr>
							<td className={styles.favourite}>SpaceX</td>
							<td>SpaceX</td>
							<td>SpaceX</td>
							<td>SpaceX</td>
						</tr>
						<tr>
							<td className={styles.favourite}>SpaceX</td>
							<td>SpaceX</td>
							<td>SpaceX</td>
							<td>SpaceX</td>
						</tr>
						<tr>
							<td className={styles.favourite}>SpaceX</td>
							<td>SpaceX</td>
							<td>SpaceX</td>
							<td>SpaceX</td>
						</tr>
						<tr>
							<td className={styles.favourite}>SpaceX</td>
							<td>SpaceX</td>
							<td>SpaceX</td>
							<td>SpaceX</td>
						</tr>
						<tr>
							<td className={styles.favourite}>SpaceX</td>
							<td>SpaceX</td>
							<td>SpaceX</td>
							<td>SpaceX</td>
						</tr>
						<tr>
							<td className={styles.favourite}>SpaceX</td>
							<td>SpaceX</td>
							<td>SpaceX</td>
							<td>SpaceX</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
}

export default Table;
