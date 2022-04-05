import './App.css';
import HomePage from './components/HomePage/HomePage';
import Favourites from './components/Favourites/Favourites';
import Lists from './components/Lists/Lists';
import Header from './components/Header/Header';

function App() {
	return (
		<div className='app'>
			<Header />
			<HomePage />
			<Lists />
			<Favourites />
		</div>
	);
}

export default App;
