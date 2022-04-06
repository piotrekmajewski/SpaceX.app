import { gql } from '@apollo/client';
import { useQuery } from '@apollo/react-hooks';
import styles from './Description.module.css';

const GET_MISSION = gql`
	query Mission($id: ID!) {
		mission(id: $id) {
			description
		}
	}
`;

function ButtonDescription(props) {
	const { loading, error, data } = useQuery(
		GET_MISSION,

		{
			variables: { id: props.missionId },
		}
	);

	if (loading) return null;
	if (error) return `Error! ${error}`;

	return (
		<div>
			<p className={styles.description}>{data.mission.description}</p>
		</div>
	);
}

export default ButtonDescription;
