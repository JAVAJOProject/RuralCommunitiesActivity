import React from 'react';
import './FaqCircle.css'

export default function FaqCircle({text}) {
	return (
		<div className='faqCircle'>
			<p>{text}</p>
		</div>
	);
}