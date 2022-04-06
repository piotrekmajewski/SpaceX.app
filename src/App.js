import ApolloClient from 'apollo-boost';
import { ApolloProvider, InMemoryCache } from '@apollo/react-hooks';

import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import Favourites from './components/Favourites/Favourites';
import Table from './components/Table/Table';
import Header from './components/Header/Header';

const client = new ApolloClient({
	uri: 'https://api.spacex.land/graphql/',
	cache: new InMemoryCache(),
});

const App = () => (
	<ApolloProvider client={client}>
		<div className='app'>
			<Header />
			<SearchBar />
			<Table />
			<Favourites />
		</div>
	</ApolloProvider>
);

export default App;
