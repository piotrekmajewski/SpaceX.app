import './Table.module.css';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import styles from './Table.module.css';

const GET_LAUNCHES = gql`
	{
		launches {
			launch_date_utc
			mission_name
		}
	}
`;

function Table() {
	const { loading, error, data } = useQuery(GET_LAUNCHES);
	console.log(loading, error, data);
	return (
		<div className={styles.wrapper}>
			<table className={styles.table}>
				<thead>
					<tr>
						<th className={styles.favourite}>Add to favourite</th>
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
	);
}

export default Table;
