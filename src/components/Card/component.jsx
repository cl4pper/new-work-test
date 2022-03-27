import React, { useState } from 'react';
import classnames from 'classnames';
import { Text, Chip } from '@components';

// STYLE
import './style.scss';

const Card = (props) => {
	const { id, info } = props;
	const [read, setRead] = useState(false);

	const title = info && info.title ? info.title : 'No title';
	const description = info && info.description ? info.description : 'No description';
	const image = info && info.image ? info.image : '';

	return (
		<div
			id={id}
			data-testid={id}
			className={classnames('Card', { 'Card--read': read })}
			onClick={() => setRead(true)}
		>
			<div
				id={`${id}-card-image`}
				data-testid={`${id}-card-image`}
				className="Card__image"
				style={{
					background: `${image ? `url(${image})` : 'rgb(179, 179, 179)'} `,
				}}
			/>
			<div data-testid={`${id}-card-content`} className="Card__info">
				<Text id={`${id}-card-title`} content={title} bold />
				<div data-testid={`${id}-card-bottom`} className="Card__description">
					<Text id={`${id}-card-description`} content={description} small />
					<span className="Card__chip">
						<Chip id={`${id}-card-chip`} label="Read" active={read} />
					</span>
				</div>
			</div>
		</div>
	);
};

export default Card;
