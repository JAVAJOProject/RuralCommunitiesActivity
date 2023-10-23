import React from 'react';
import './InquiryDetailAnswer.css'

export default function InquiryDetailAnswer({text}) {
	return (
		<div className='inquiryDetailAnswer'>
			<p>{text}</p>
		</div>
	);
}

