import React from 'react';
import {Link} from '../../routes'

const nextBar = (props) => {

	let nextArrow = null;
	let prevArrow = null;
	if (props.nextPage) {
		nextArrow = (
		<div style={{float: 'right'}}>
		<Link route={'/books/' + props.book + '/' + props.nextPage}>
			<a href={'/books/' + props.book + '/' + props.nextPage}>
			<i class="fa fa-arrow-right" aria-hidden="true"></i>
			<span style={{float:'left'}}>Next Page</span>
			</a>
		</Link>
		</div>
		);
	}
	if (props.lastPage) {
		prevArrow = (
		<div style={{float: 'left'}}>
		<Link route={'/books/' + props.book + '/' + props.lastPage}>
			<a href={'/books/' + props.book + '/' + props.lastPage}>
				<span style={{float:'right'}}>Prev Page</span>
				<i class="fa fa-arrow-left" aria-hidden="true"></i>
			</a>
		</Link>
		</div>
		);
	}

	return (
		<div className="next-prev">
		{nextArrow}
		{prevArrow}
		</div>
	);
}

export default nextBar;