import React from 'react';

const header = (props) => {
	return (
		<div className="header section-wrapper"><h1 className="book-title">{props.title}</h1></div>
	);
}

export default header;