import React from 'react';
import { ArticlesProvider } from '@context';
// STYLE
import './App.scss';

import { Home } from '@pages';

const App = () => {
	return (
		<ArticlesProvider>
			<div className="App">
				<Home />
			</div>
		</ArticlesProvider>
	);
};

export default App;
