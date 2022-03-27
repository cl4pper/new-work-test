import React from 'react';
import { Text, Chip, Title } from '@components';

// STYLE
import './style.scss';

const Article = (props) => {
	const { id, article } = props;

	const title = article && article.title ? article.title : 'No title';
	const content = article && article.content ? article.content : 'No content';
	const author = article && article.author ? article.author : 'No author';
	const url = article && article.url ? article.url : '';
	const date = article && article.publishedAt ? article.publishedAt : 'No date';
	const image = article && article.image ? article.image : '';

    function renderLink() {
        return url
        ? (<a href={url} target="_blank" className="Article__link"><Text id={`${id}-article-link`} content="Full article link" italic small /></a>)
        : null
    }

	return (
		<section className="Article" data-testid={id}>
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
                { renderLink() }
				<Text id={`${id}-article-content`} content={content} />
			</div>
		</section>
	);
};

export default Article;
