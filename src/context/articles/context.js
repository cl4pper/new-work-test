import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ArticlesContext = createContext(null);

export function ArticlesProvider({ children }) {
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		axios
			.get('http://0.0.0.0:8000/v1/news')
			.then((res) => {
				setArticles(res.data.articles);
				setLoading(false);
			})
			.catch((err) => {
				console.error('ERR: ', err);
				setLoading(false);
			});
	}, []);

	const context = {
		articles,
		loading,
	};

	return <ArticlesContext.Provider value={context}>{children}</ArticlesContext.Provider>;
}
