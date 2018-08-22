import React, { Component } from 'react';
import ReactDOM from "react-dom";
import renderHTML from 'react-render-html';

class BookNav extends Component {
  state = {
  	fixIt: false,
  	width: 0,
  	contents: null
  }

  componentDidMount() {
  	this.handleScroll();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const lastScrollY = window.scrollY;
	const bodyRect = document.body.getBoundingClientRect();
	const offset   = 225;
	const parentWidth = ReactDOM.findDOMNode(this).clientWidth;
	let fixed = this.state.fixIt;

	if (!fixed && offset < lastScrollY) {
		this.setState({fixIt: true, width: parentWidth});
	}
	if (fixed && offset >= lastScrollY) {
		this.setState({fixIt: false, width: parentWidth});
	}

  };

	render() {
		const navClasses = ['section-wrapper', 'book-nav'];
		let fixedWidth = null;
		let contentsRendered = null;
		if (this.state.fixIt) {
			navClasses.push('book-nav-fixed');
			fixedWidth = this.state.width;
		}
		if (this.props.contents) {
			const contentsTemp = this.props.contents;
			contentsRendered = contentsTemp.map(link => {
				let temporalDivElement = document.createElement("div");
			    temporalDivElement.innerHTML = link.name;
			     console.log(temporalDivElement.textContent || temporalDivElement.innerText || "");

				return renderHTML(link.name);
			});
		}
		return (
			<div className={navClasses.join(" ")} style={{width: fixedWidth}}>
				<div className="contents-relative">
					{contentsRendered}
				</div>
			</div>
		);
	}
}

export default BookNav;