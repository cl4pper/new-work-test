import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Loader from './component';

let wrapper = () => <Loader id="jest" />;

describe('Loader', () => {
	it('should render', () => {
		const { getByTestId } = render(wrapper());

		expect(getByTestId('jest')).toBeTruthy();
		expect(getByTestId('jest-loader-icon')).toBeTruthy();
	});
});
