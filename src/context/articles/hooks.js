import { useContext } from 'react';
import { ArticlesContext } from './context';

export function useGetArticles() {
	const context = useContext(ArticlesContext);
	const { articles, loading } = context;

	return {
		articles,
		loading,
	};
}
