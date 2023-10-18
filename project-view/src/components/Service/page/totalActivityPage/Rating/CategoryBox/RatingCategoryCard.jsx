import React from 'react';
import './RatingCategoryCard.css'

export default function RatingCategoryCard({children, style, className}) {
	const classes = ['ratingCategoryCard', className].join(' ')

	return (
		<div className={classes} style={style}>
			{children}
		</div>
	);
}

