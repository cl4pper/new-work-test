import React from 'react';
import classnames from 'classnames';

// STYLE
import './style.scss';

const Title = (props) => {
	const { id, content, small, bold, italic } = props;

	return (
		<p id={id} data-testid={id} className={classnames('Title', { 'Title--small': small, 'Title--bold': bold, 'Title--italic': italic })}>
			{content}
		</p>
	);
};

export default Title;
