import React, { Component } from "react";
import NextPrev from '../nextPrev/nextPrev';
import Aux from '../hoc/Aux/Aux';

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
		<Aux>
			<NextPrev lastPage={this.props.lastPage} nextPage={this.props.nextPage} book={this.props.book}/>
			<div className="page section-wrapper">
				{htmlDisplayed}
			</div>
			<NextPrev lastPage={this.props.lastPage} nextPage={this.props.nextPage} book={this.props.book}/>
			<div style={{marginBottom: '50px'}}></div>
		</Aux>
		);	
	}

};

export default Page;