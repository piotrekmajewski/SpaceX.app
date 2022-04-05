import './Table.module.css';
import styles from './Table.module.css';

function Table() {
	return (
		<>
			<div className={styles.wrapper}>
				<table className={styles.table}>
					<thead>
						<tr>
							<th className={styles.favourite}>
								Add to favourite
							</th>
							<th>Data</th>
							<th>Name</th>
							<th className={styles.description}>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<input type='checkbox' />
							</td>
							<td>SpaceX</td>
							<td>SpaceX</td>
							<td>SpaceX</td>
						</tr>
						<tr>
							<td>
								<input type='checkbox' />
							</td>
							<td>SpaceX</td>
							<td>SpaceX</td>
							<td>SpaceX</td>
						</tr>
						<tr>
							<td>
								<input type='checkbox' />
							</td>
							<td>SpaceX</td>
							<td>SpaceX</td>
							<td>SpaceX</td>
						</tr>
						<tr>
							<td>
								<input type='checkbox' />
							</td>
							<td>SpaceX</td>
							<td>SpaceX</td>
							<td>SpaceX</td>
						</tr>
						<tr>
							<td>
								<input type='checkbox' />
							</td>
							<td>SpaceX</td>
							<td>SpaceX</td>
							<td>SpaceX</td>
						</tr>
						<tr>
							<td>
								<input type='checkbox' />
							</td>
							<td>SpaceX</td>
							<td>SpaceX</td>
							<td>SpaceX</td>
						</tr>
						<tr>
							<td>
								<input type='checkbox' />
							</td>
							<td>SpaceX</td>
							<td>SpaceX</td>
							<td>SpaceX</td>
						</tr>
						<tr>
							<td>
								<input type='checkbox' />
							</td>
							<td>SpaceX</td>
							<td>SpaceX</td>
							<td>SpaceX</td>
						</tr>
						<tr>
							<td>
								<input type='checkbox' />
							</td>
							<td>SpaceX</td>
							<td>SpaceX</td>
							<td>SpaceX</td>
						</tr>
						<tr>
							<td>
								<input type='checkbox' />
							</td>
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
