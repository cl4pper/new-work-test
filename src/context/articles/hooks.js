import { useContext } from 'react';
import { ArticlesContext } from './context';

export function useArticles() {
	const context = useContext(ArticlesContext);
	const { articles, loading, article, selectArticle } = context;

	return {
		articles,
		loading,
		article,
		selectArticle,
	};
}
