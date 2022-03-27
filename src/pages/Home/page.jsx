import React from 'react';
import { List, Article } from '@containers';

// STYLE
import './style.scss';

const Home = () => {
	return (
		<div className="Home">
			<List />
			<Article id="home-page" />
		</div>
	);
};

export default Home;
