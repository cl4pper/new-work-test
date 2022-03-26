import React from 'react';
import classnames from 'classnames';
import { Text } from '@components';

// STYLE
import './style.scss';

const Chip = (props) => {
	const { id, label, active } = props;

	return (
		<div id={id} data-testid={id} className={classnames('Chip', { 'Chip--active': active })}>
			<Text id={`${id}-chip-label`} content={label} small />
		</div>
	);
};

export default Chip;
