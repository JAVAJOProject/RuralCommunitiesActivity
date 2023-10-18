import React from 'react';
import './MypageMemberReviewEditTitle.css'
import MypageMemberReviewEditRating from './MypageMemberReviewEditRating';

export default function MypageMemberReviewEditTitle({reviewTitle, ratingTitle, ratingNum}) {
	return (
		<div className='mypageMemberReviewEditTitle'>
			<MypageMemberReviewEditRating ratingTitle={ratingTitle} ratingNum={ratingNum} />
			<p>{reviewTitle}</p>
		</div>
	);
}

