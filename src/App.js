import './App.css';
import HomePage from './components/HomePage/HomePage';
import Favourites from './components/Favourites/Favourites';
import Table from './components/Table/Table';
import Header from './components/Header/Header';

function App() {
	return (
		<div className='app'>
			<Header />
			<HomePage />
			<Table />
			<Favourites />
		</div>
	);
}

export default App;
