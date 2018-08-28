import React, { Component } from 'react';
import ReactDOM from "react-dom";
import renderHTML from 'react-render-html';
import {Link} from '../../routes';
import SearchBox from '../searchBox/searchBox';
import DownloadPdf from '../downloadPdf/downloadPdf';

class BookNav extends Component {
  state = {
  	fixIt: false,
  	width: 0,
  	contents: null,
  	mobileShow: null
  }

  componentDidMount() {
  	this.handleScroll();
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleScroll);
  }

  componentWillReceiveProps(nextProps) {
  	if (nextProps.currPage.indexOf('.') > -1 &&
  		document.getElementsByClassName('selected')[0]) {
    	document.getElementsByClassName('selected')[0].scrollIntoView(true);
  	}
  }

  showNavBarHandler = () => {
  	this.setState({mobileShow: true});
  }

  hideNavBarHandler = () => {
  	this.setState({mobileShow: false});
  }

  toggleNavBarHandler = () => {
  	const mobileShow = this.state.mobileShow;
  	this.setState({mobileShow: !mobileShow});
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const lastScrollY = window.scrollY;
	const bodyRect = document.body.getBoundingClientRect();
	const offset   = 450;
	const parentWidth = ReactDOM.findDOMNode(this).parentElement.clientWidth;
	let fixed = this.state.fixIt;

	if (!fixed && offset < lastScrollY) {
		this.setState({fixIt: true, width: parentWidth});
	}
	if (fixed && offset >= lastScrollY) {
		this.setState({fixIt: false, width: parentWidth});
	}

  };

	render() {
		const navClasses = ['section-wrapper', 'book-nav', 'book-nav-mobile'];
		let fixedWidth = null;
		let contentsRendered = null;
		if (this.state.fixIt) {
			navClasses.push('book-nav-fixed');
			fixedWidth = this.state.width;
		}
		if (this.state.mobileShow) {
			navClasses.push('book-nav-visible');
		}
		if (this.props.contents) {
			const contentsTemp = this.props.contents;
			let chapter = contentsTemp.filter(link => {
				if (link.tree.part === this.props.currPage
					|| link.tree.chapter === this.props.currPage
					|| link.tree.section === this.props.currPage
					|| link.tree.subsection === this.props.currPage) {
					return true;
				} else {
					return false;
				}
			});
			if (chapter && chapter[0] && chapter[0].tree && chapter[0].tree.chapter) {
				chapter = chapter[0].tree.chapter;
			} else {
				chapter = null;
			}
			contentsRendered = contentsTemp.map(link => {
				let headClasses = ['sectionLink'];
				if (this.props.currPage === link.link) {
					headClasses.push('selected');
				}
				if (link.tree.part === this.props.currPage
					|| link.tree.chapter === this.props.currPage
					|| link.tree.section === this.props.currPage
					|| link.tree.subsection === this.props.currPage 
					|| chapter === link.tree.chapter) {
					headClasses.push('show');
				}
				if (link.type === 'chapter') {
					headClasses.push('chapter');
					return <h4 className={headClasses.join(" ")} key={link.link}><Link route={'/books/' + this.props.book + '/' + link.link}><a href={'/books/' + this.props.book + '/' + link.link}>Chapter {link.plainText}</a></Link></h4>
				}
				if (link.type === 'section') {
					headClasses.push('section');
					return <h5 className={headClasses.join(" ")} key={link.link}><Link route={'/books/' + this.props.book + '/' + link.link}><a href={'/books/' + this.props.book + '/' + link.link}>{link.plainText}</a></Link></h5>
				}
				if (link.type === 'subsection') {
					headClasses.push('subsection');
					return <h6 className={headClasses.join(" ")} key={link.link}><Link route={'/books/' + this.props.book + '/' + link.link}><a href={'/books/' + this.props.book + '/' + link.link}>{link.plainText}</a></Link></h6>
				}
				if (link.type === 'part') {
					headClasses.push('part');
					return <h3 className={headClasses.join(" ")} key={link.link}><Link route={'/books/' + this.props.book + '/' + link.link}><a href={'/books/' + this.props.book + '/' + link.link}>Part {link.plainText}</a></Link></h3>
				}
				return null;
			});
		}
		let arrowDirection = <i className="fa fa-chevron-left" aria-hidden="true"></i>;
		let toggleOptionsClasses = ['toggle-options', 'd-md-none'];
		if (this.state.mobileShow) {
			arrowDirection = <i className="fa fa-chevron-right" aria-hidden="true"></i>;
			toggleOptionsClasses.push('toggle-follow');
		}
		return (
			<div>
                  <div className={toggleOptionsClasses.join(" ")} onClick={this.toggleNavBarHandler}>{arrowDirection}</div>
			<div className={navClasses.join(" ")} style={{width: fixedWidth}}>
				<div className="searchBox">
					<SearchBox book={this.props.book} currPage={this.props.currPage}/>
				</div>
				<div className="contents-relative">
						{contentsRendered}
				</div>
				<DownloadPdf bookTitle={this.props.title} book={this.props.book} />
			</div>
			</div>
		);
	}
}

export default BookNav;