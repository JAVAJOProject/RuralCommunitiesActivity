import React from 'react';
import './GreenCardBox.css'

export default function GreenCardBox({children}) {
	return (
		<div className='greenCardBox'>
			{children}
		</div>
	);
}

