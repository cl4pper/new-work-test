import React from 'react';
import classnames from 'classnames';
import { useArticles } from '@context';
import { Card, Text } from '@components';

// STYLE
import './style.scss';

const List = () => {
	const { articles, loading, selectArticle } = useArticles();

	return (
		<div className={classnames('List', { 'List--empty': loading && !articles.length })}>
			{loading ? (
				<Text id="list-loading" content="Loading..." italic />
			) : (
				<ul className="List__list">
					{articles.map((article, index) => (
						<li
							className="List__item"
							key={`article-${index}`}
							onClick={() => selectArticle(article)}
						>
							<Card id={`article-${index}`} info={article} />
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default List;
