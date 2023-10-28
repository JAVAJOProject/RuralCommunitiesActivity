import React from 'react';
import './RecTownReportTitle.css'

export default function RecTownReportTitle({imgSrc, mainTitle, subtitle}) {
	return (
		<div className='recTownReportTitle'>
			<img src={imgSrc} alt='' />
			<p>{mainTitle}</p>
			<p>{subtitle}</p>
		</div>
	);
}

