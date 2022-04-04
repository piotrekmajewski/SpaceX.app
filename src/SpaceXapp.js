import './SpaceXapp.css';
import HomePage from './components/HomePage/HomePage';
import Favourites from './components/Favourites/Favourites';
import Lists from './components/Lists/Lists';

function SpaceXapp() {
	return (
		<div className='SpaceXapp'>
			<HomePage />
			<Lists />
			<Favourites />
		</div>
	);
}

export default SpaceXapp;
