import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ArticlesContext = createContext(null);

export function ArticlesProvider({ children }) {
	const [articles, setArticles] = useState([]);
	const [article, selectArticle] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		axios
			.get(process.env.BASE_URL)
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
		article,
		selectArticle,
	};

	return <ArticlesContext.Provider value={context}>{children}</ArticlesContext.Provider>;
}
