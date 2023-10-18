import React from 'react';
import { Outlet } from 'react-router-dom';
import TotalActivityNav from './TotalActivityNav';

const TotalActivityNavContents = [
  { text: '상세 정보', link: 'info' },
  { text: '체험 후기', link: 'review' },
];

export default function RootLayoutTotalActivity() {
	return (
		<>
			<TotalActivityNav navContents={TotalActivityNavContents} />
			<main>
				<Outlet />
			</main>
		</>
	);
}

