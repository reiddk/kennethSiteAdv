import React, { Component } from "react";

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
			htmlDisplayed = <div dangerouslySetInnerHTML={{__html: this.props.html}} />
		}
		return (
		<div className="page section-wrapper">
			{htmlDisplayed}
		</div>
		);	
	}

};

export default Page;