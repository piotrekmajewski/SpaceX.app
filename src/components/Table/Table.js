import './Table.module.css';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/react-hooks';
import styles from './Table.module.css';
import Description from '../Description/Description';
import moment from 'moment';

const GET_LAUNCHES = gql`
	query Launches($limit: Int!) {
		launches(limit: $limit) {
			launch_date_utc
			mission_name
			mission_id
		}
	}
`;

function Table() {
	const { loading, error, data } = useQuery(
		GET_LAUNCHES,

		{
			variables: { limit: 10 },
		}
	);

	if (loading) return null;
	if (error) return `Error! ${error}`;

	const launches = data.launches.map(
		({ launch_date_utc, mission_name, mission_id }) => {
			return {
				date: launch_date_utc,
				missionName: mission_name,
				missionId: mission_id[0] || '',
			};
		}
	);

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
					{launches.map(({ date, missionName, missionId }) => {
						return (
							<tr>
								<td>
									<input type='checkbox' />
								</td>
								<td>
									{moment(date).format('dd MM yyyy, HH:mm')}
								</td>
								<td>{missionName}</td>
								<td className={styles.description}>
									{!!missionId ? (
										<Description missionId={missionId} />
									) : null}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default Table;
