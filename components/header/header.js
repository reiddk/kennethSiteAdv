import React from 'react';

const header = (props) => {
	return (
		<div className="header section-wrapper"><div className="book-title">{props.title}</div></div>
	);
}

export default header;