import React from 'react';
import './CardListContentBox.css'

export default function CardListContentBox({children, style, className}) {
	const classes = [className, 'cardListContentBox'].join(' ')

	return (
		<div className={classes} style={style}>
			{children}
		</div>
	);
}

