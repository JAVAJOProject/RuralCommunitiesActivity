import React from 'react';
import './MypageMemberReviewRating.css'

export default function MypageMemberReviewRating({rating}) {
	return (
		<div className='mypageMemberReviewRating'>
			<p>{'★'.repeat(+rating)}</p>
		</div>
	);
}

