import React from 'react';
import './MypageMemberReviewTextarea.css'

export default function MypageMemberReviewTextarea({textContent}) {
	return (
		<div className='mypageMemberReviewTextarea'>
			<textarea value={textContent} />
		</div>
	);
}

