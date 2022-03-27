// Article test
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Article from './component';

const fullArticle = {
	title: 'Title here',
	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	author: 'Author',
	publishedAt: String(new Date()),
	url: 'https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg',
	image: 'https://i.ytimg.com/vi/KGRl_-wWMD0/hqdefault_live.jpg',
};

const article = {
	title: 'Title here',
	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	author: 'Author',
	publishedAt: String(new Date()),
	url: 'https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg',
	image: null,
};

const emptyArticle = {
	title: null,
	content: null,
	author: null,
	publishedAt: null,
	url: null,
	image: null,
};

let wrapper = (props) => <Article {...props} />;

describe('Article', () => {
	it('should render', () => {
		const { getByTestId } = render(wrapper({ id: 'jest', article: article }));

		const date = String(new Date());

		const elem = document.querySelector('#jest-article-image');
		const bg = elem.style.background;

		expect(getByTestId('jest')).toBeTruthy();
		expect(bg).toBe('rgb(179, 179, 179)');
		expect(getByTestId('jest-article-author').textContent).toBe('Author');
		expect(getByTestId('jest-article-date').textContent).toBe(date);
		expect(getByTestId('jest-article-title').textContent).toBe('Title here');
		expect(getByTestId('jest-article-link')).toBeTruthy();
		expect(getByTestId('jest-article-content').textContent).toBe(
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		);
	});

	it('should render image', () => {
		const { getByTestId } = render(wrapper({ id: 'jest', article: fullArticle }));

		const elem = document.querySelector('#jest-article-image');
		const bg = elem.style.background;

		expect(getByTestId('jest-article-image')).toBeTruthy();
		expect(bg).toBe('url(https://i.ytimg.com/vi/KGRl_-wWMD0/hqdefault_live.jpg)');
	});

	it('should handle empty article', () => {
		const { getByTestId, queryByTestId } = render(wrapper({ id: 'jest', article: emptyArticle }));

		const elem = document.querySelector('#jest-article-image');
		const bg = elem.style.background;

		expect(getByTestId('jest')).toBeTruthy();
		expect(bg).toBe('rgb(179, 179, 179)');
		expect(getByTestId('jest-article-author').textContent).toBe('No author');
		expect(getByTestId('jest-article-date').textContent).toBe('No date');
		expect(getByTestId('jest-article-title').textContent).toBe('No title');
		expect(queryByTestId('jest-article-link')).toBeNull();
		expect(getByTestId('jest-article-content').textContent).toBe('No content');
	});
});
