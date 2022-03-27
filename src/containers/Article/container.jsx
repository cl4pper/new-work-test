import React from 'react';
import classnames from 'classnames';
import { Text, Title } from '@components';
import { useArticles } from '@context';

// STYLE
import './style.scss';

const Article = (props) => {
	const { id } = props;
	const { article } = useArticles();

	function setDate (arg) {
		const date = new Date(arg);
		const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',  'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		const day = date.getDate();
		const month = months[date.getMonth()];
		const year = date.getFullYear();

		return `${month} ${day}, ${year}`;
	}

	const title = article && article.title ? article.title : 'No title';
	const content = article && article.content ? article.content : 'No content';
	const author = article && article.author ? article.author : 'No author';
	const url = article && article.url ? article.url : '';
	const date = article && article.publishedAt ? setDate(article.publishedAt) : 'No date';
	const image = article && article.urlToImage ? article.urlToImage : '';

	function renderLink() {
		return url ? (
			<a href={url} target="_blank" className="Article__link">
				<Text id={`${id}-article-link`} content="Full article link" italic />
			</a>
		) : null;
	}

	function render() {
		return article ? (
			<>
				{' '}
				<div
					id={`${id}-article-image`}
					data-testid={`${id}-article-image`}
					className="Article__image"
					style={{ background: `${image ? `url(${image})` : 'rgb(179, 179, 179)'}` }}
				>
					<div data-testid={`${id}-article-details`} className="Article__details">
						<Text id={`${id}-article-author`} content={author} bold />
						<Text id={`${id}-article-date`} content={date} bold />
					</div>
				</div>
				<div data-testid={`${id}-article-bottom`} className="Article__content">
					<Title id={`${id}-article-title`} content={title} bold />
					{renderLink()}
					<Text id={`${id}-article-content`} content={content} />
				</div>
			</>
		) : (
			<Text id={`${id}-article-empty`} content="No article selected." italic />
		);
	}

	return (
		<section className={classnames('Article', { 'Article--empty': !article })} data-testid={id}>
			{render()}
		</section>
	);
};

export default Article;
