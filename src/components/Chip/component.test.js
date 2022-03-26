import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Chip from './component';

let wrapper = (props) => <Chip {...props} />;
const props = (args) => ({
	id: 'jest',
	label: 'Chip label.',
	...args,
});

describe('Chip', () => {
	afterAll(() => (wrapper = null));

	it('should render', () => {
		const { getByTestId } = render(wrapper(props()));

		expect(getByTestId('jest').textContent).toBe('Chip label.');
		expect(getByTestId('jest').classList).not.toContain('Chip--active');
	});

	it('should be active', () => {
		const { getByTestId } = render(wrapper(props({ active: true })));

		expect(getByTestId('jest').textContent).toBe('Chip label.');
		expect(getByTestId('jest').classList).toContain('Chip--active');
	});
});
