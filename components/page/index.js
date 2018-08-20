import React, { Component } from "react";
import renderHTML from 'react-render-html';

class Page extends Component {

	shouldComponentUpdate(nextProps) {
	  return this.props.html !== nextProps.html;
	}

	render() {
		let htmlDisplayed = (
			<div style={{textAlign:'center', marginTop: '20%'}}>
			<div className="lds-dual-ring">
			</div></div>
		);

		if (this.props.html) {
			htmlDisplayed = renderHTML(this.props.html);
		}
		return (
		<div>
			{htmlDisplayed}
		</div>
		);	
	}

};

export default Page;