import React from 'react';
import './FaqTitleText.css'

export default function FaqTitleText({title}) {
	return (
		<div className='faqTitleText'>
			<p>{title}</p>
		</div>
	);
}