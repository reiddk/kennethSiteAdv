import React, { Component } from "react";
import NextPrev from '../nextPrev/nextPrev';
import Aux from '../hoc/Aux/Aux';
import Swipe from 'react-easy-swipe';
import {Router} from '../../routes';

let positionReleased = 0;

class Page extends Component {

	componentDidMount() {
		document.documentElement.addEventListener('build', function (e) { 
			document.getElementById('page-to-search').style.opacity = 1;
		});
	}

	shouldComponentUpdate(nextProps) {
	  return this.props.html !== nextProps.html;
	}

	componentDidUpdate() {
		let event = new Event('build');
		document.documentElement.dispatchEvent(event);
	}

	  onSwipeStart = (event) => {
	    document.getElementById('page-to-search').style.opacity = 1;
	    positionReleased = 0;
	  }
	 
	  onSwipeMove = (position, event) => {
	    let moveUpdate = Math.abs(position.x);
	    let opacityCalc = (200 - moveUpdate) / 200;
	    document.getElementById('page-to-search').style.opacity = opacityCalc;
	    positionReleased = position.x;
	  }
	 
	  onSwipeEnd = (event) => {
	    if (positionReleased > 125 && this.props.lastPage) {
	  		Router.pushRoute('/books/' + this.props.book + '/' + this.props.lastPage);
	    } else if (positionReleased < -125 && this.props.nextPage) {
	  		Router.pushRoute('/books/' + this.props.book + '/' + this.props.nextPage);
	    } else {
			document.getElementById('page-to-search').style.opacity = 1;
	    }
	  }


	render() {
		let htmlDisplayed = (
			<div style={{textAlign:'center', marginTop: '20%'}}>
			<div className="lds-dual-ring">
			</div></div>
		);

		if (this.props.html) {
			htmlDisplayed = <div id="page-to-search" dangerouslySetInnerHTML={{__html: this.props.html}} ></div>
		}
		return (
		<Swipe
        onSwipeStart={this.onSwipeStart}
        onSwipeMove={this.onSwipeMove}
        onSwipeEnd={this.onSwipeEnd}>
			<NextPrev key="1" lastPage={this.props.lastPage} nextPage={this.props.nextPage} book={this.props.book}/>
			<div className="page section-wrapper">
				{htmlDisplayed}
			</div>
			<NextPrev key="2" lastPage={this.props.lastPage} nextPage={this.props.nextPage} book={this.props.book}/>
			<div style={{marginBottom: '50px'}}></div>
		</Swipe>

		);	
	}

};

export default Page;