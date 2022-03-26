import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Title from './component';

let wrapper = (props) => <Title {...props} />;
const props = (args) => ({
	id: 'jest',
	content: 'Jest title.',
	...args,
});

describe('Title', () => {
	afterAll(() => (wrapper = null));

	it('should render', () => {
		const { getByTestId } = render(wrapper(props()));

		expect(getByTestId('jest').textContent).toBe('Jest title.');
		expect(getByTestId('jest').classList).not.toContain('Title--small');
		expect(getByTestId('jest').classList).not.toContain('Title--bold');
		expect(getByTestId('jest').classList).not.toContain('Title--italic');
	});

	it('should be smaller', () => {
		const { getByTestId } = render(wrapper(props({ small: true })));

		expect(getByTestId('jest').textContent).toBe('Jest title.');
		expect(getByTestId('jest').classList).toContain('Title--small');
	});

	it('should be bold', () => {
		const { getByTestId } = render(wrapper(props({ bold: true })));

		expect(getByTestId('jest').textContent).toBe('Jest title.');
		expect(getByTestId('jest').classList).toContain('Title--bold');
	});

	it('should be italic', () => {
		const { getByTestId } = render(wrapper(props({ italic: true })));

		expect(getByTestId('jest').textContent).toBe('Jest title.');
		expect(getByTestId('jest').classList).toContain('Title--italic');
	});
});
