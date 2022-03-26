import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Text from './component';

let wrapper = (props) => <Text {...props} />;
const props = (args) => ({
	id: 'jest',
	content: 'Jest text.',
	...args,
});

describe('Text', () => {
	afterAll(() => (wrapper = null));

	it('should render', () => {
		const { getByTestId } = render(wrapper(props()));

		expect(getByTestId('jest').textContent).toBe('Jest text.');
		expect(getByTestId('jest').classList).not.toContain('Text--small');
		expect(getByTestId('jest').classList).not.toContain('Text--bold');
		expect(getByTestId('jest').classList).not.toContain('Text--italic');
	});

	it('should be smaller', () => {
		const { getByTestId } = render(wrapper(props({ small: true })));

		expect(getByTestId('jest').textContent).toBe('Jest text.');
		expect(getByTestId('jest').classList).toContain('Text--small');
	});

	it('should be bold', () => {
		const { getByTestId } = render(wrapper(props({ bold: true })));

		expect(getByTestId('jest').textContent).toBe('Jest text.');
		expect(getByTestId('jest').classList).toContain('Text--bold');
	});

	it('should be italic', () => {
		const { getByTestId } = render(wrapper(props({ italic: true })));

		expect(getByTestId('jest').textContent).toBe('Jest text.');
		expect(getByTestId('jest').classList).toContain('Text--italic');
	});
});
