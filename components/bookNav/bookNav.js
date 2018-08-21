import React, { Component } from 'react';
import ReactDOM from "react-dom";

class BookNav extends Component {
  state = {
  	fixIt: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }


  handleScroll = () => {
    const lastScrollY = window.scrollY;
    const node = ReactDOM.findDOMNode(this);
	const bodyRect = document.body.getBoundingClientRect();
	const elemRect = node.getBoundingClientRect();
	const offset   = elemRect.top - bodyRect.top;
	let fixed = this.state.fixIt;
	console.log('elem is here', offset + 25);

	console.log('window is here ', lastScrollY);
	if (!fixed && offset + 25 < lastScrollY) {
		this.setState({fixed: true});
	}
	if (fixed && offset + 25 >= lastScrollY) {
		this.setState({fixed: false});
	}

  };

	render() {
		let navClasses = ['section-wrapper', 'book-nav'];
		if (this.state.fixIt) {
			navClasses.push('book-nav-fixed');
		}
		return (
			<div className={navClasses.join(" ")}>
				
			</div>
		);
	}
}

export default BookNav;