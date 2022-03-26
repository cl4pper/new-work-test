import React from 'react';
import classnames from 'classnames';

// STYLE
import './style.scss';

const Text = (props) => {
	const { id, content, small, bold, italic } = props;

	return (
		<p id={id} data-testid={id} className={classnames('Text', { 'Text--small': small, 'Text--bold': bold, 'Text--italic': italic })}>
			{content}
		</p>
	);
};

export default Text;
