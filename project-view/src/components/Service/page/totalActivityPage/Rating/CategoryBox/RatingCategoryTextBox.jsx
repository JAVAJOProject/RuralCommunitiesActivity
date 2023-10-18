import React from 'react';
import './RatingCategoryTextBox.css'

export default function RatingCategoryTextBox({text}) {
	return (
		<div className='ratingCategoryTextBox'>
			<p>{text}</p>
		</div>
	);
}

