import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Card from './component';

const info = {
	title: 'Title here',
	description: 'Content to be rendered.',
	image: '',
};
const fullInfo = {
	title: 'Title here',
	description: 'Content to be rendered.',
	image: 'https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg',
};
const emptyInfo = {
	title: null,
	description: null,
	image: null,
};

let wrapper = (props) => <Card {...props} />;

describe('Card', () => {
	afterAll(() => (wrapper = null));

	it('should render', () => {
		const { getByTestId } = render(wrapper({ id: 'jest', info: info }));

		const elem = document.querySelector('#jest-card-image');
		const bg = elem.style.background;

		expect(getByTestId('jest-card-image')).toBeTruthy();
		expect(getByTestId('jest-card-title')).toBeTruthy();
		expect(getByTestId('jest-card-description')).toBeTruthy();
		expect(getByTestId('jest-card-chip')).toBeTruthy();
		expect(getByTestId('jest').classList).not.toContain('Card--read');
		expect(bg).toBe('rgb(179, 179, 179)');
	});

	it('should be read', () => {
		const { getByTestId } = render(wrapper({ id: 'jest', info: fullInfo }));

		fireEvent.click(getByTestId('jest'));

		expect(getByTestId('jest').classList).toContain('Card--read');
	});

	it('should render image', () => {
		const { getByTestId } = render(wrapper({ id: 'jest', info: fullInfo }));

		const elem = document.querySelector('#jest-card-image');
		const bg = elem.style.background;

		expect(getByTestId('jest-card-image')).toBeTruthy();
		expect(bg).toBe(
			'url(https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg)'
		);
	});

	it('should render empty card', () => {
		const { getByTestId } = render(wrapper({ id: 'jest', info: emptyInfo }));

		const elem = document.querySelector('#jest-card-image');
		const bg = elem.style.background;

		expect(getByTestId('jest-card-title').textContent).toBe('No title');
		expect(getByTestId('jest-card-description').textContent).toBe('No description');
		expect(bg).toBe('rgb(179, 179, 179)');
	});
});
