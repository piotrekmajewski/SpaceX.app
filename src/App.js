import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import Favourites from './components/Favourites/Favourites';
import Table from './components/Table/Table';
import Header from './components/Header/Header';

function App() {
	return (
		<div className='app'>
			<Header />
			<Table />
			<SearchBar />
			<Favourites />
		</div>
	);
}

export default App;
