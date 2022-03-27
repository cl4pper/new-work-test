import React from 'react';
import { GithubLogo } from '../../assets/icons';

// STYLE
import './style.scss';

const Loader = (props) => {
	const { id } = props;
	const size = 48;

	return (
		<div className="Loader" id={id} data-testid={id}>
			<GithubLogo className="Loader__icon" id={`${id}-loader-icon`} width={size} height={size} />
		</div>
	);
};

export default Loader;
