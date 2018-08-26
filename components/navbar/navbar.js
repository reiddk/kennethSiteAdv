import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head'
import {Link} from '../../routes'
import Aux from '../hoc/Aux/Aux';
import NProgress from 'nprogress';
import Router from 'next/router'

Router.onRouteChangeStart = (url) => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

class Navbar extends Component {

state = {
	showDropDown: false,
	showMobileDown: false
}

constructor(props) {
	super(props);

	this.setWrapperRef = this.setWrapperRef.bind(this);
	this.handleClickOutside = this.handleClickOutside.bind(this);
}

componentDidMount() {
	document.addEventListener('mousedown', this.handleClickOutside);
	
}

componentWillUnmount() {
	document.removeEventListener('mousedown', this.handleClickOutside);
}

setWrapperRef(node) {
	this.wrapperRef = node;
}

toggleDropDownHandler = () => {
	let dropDown = this.state.showDropDown;
	dropDown = !dropDown;
	this.setState({showDropDown: dropDown});
}

toggleMobileDownHandler = () => {
	let dropDown = this.state.showMobileDown;
	dropDown = !dropDown;
	this.setState({showMobileDown: dropDown});
}

hideDropDownHandler = () => {
	this.setState({showDropDown: false, showMobileDown: false});
}

handleClickOutside(event) {
	if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
		this.hideDropDownHandler();
	}
}


render() {
	let dropDownClasses = ['dropdown-menu', 'd-none d-md-block'];
	let arrowUpDown = <i className="fa fa-sort-desc" aria-hidden="true"></i>;
	if (this.state && this.state.showDropDown) {
		dropDownClasses.push("showDropDown");
		arrowUpDown = <i className="fa fa-sort-asc" aria-hidden="true"></i>
	}
	let wrapperRef = null;
	if (this.setWrapperRef) {
		wrapperRef = this.setWrapperRef
	}
	let mobileDropDown = ['collapse', 'navbar-collapse'];
	if (this.state && this.state.showMobileDown) {
		mobileDropDown.push('show');
	}

	return (
		<Aux>
	    <Head>
	      <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
	    </Head>
		<nav className="navbar navbar-expand-md fixed-top navbar-dark bg-dark" ref={wrapperRef}>
		<Link route='/'>
		  <a className="navbar-brand" href="/">Kenneth Kuttler</a>
		</Link>
		  <button onClick={this.toggleMobileDownHandler} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>
		  </button>

		  <div className={mobileDropDown.join(" ")} id="navbarSupportedContent">
		    <ul className="navbar-nav mr-auto">
		      <li className="nav-item active">
		      <Link route='/'>
		        <a className="nav-link" href="/">Home</a>
		      </Link>
		      </li>
		      <li className="nav-item dropdown">
		        <span onClick={this.toggleDropDownHandler} className="nav-link" id="navbarDropdown" role="button">
		          Books {arrowUpDown}
		        </span>

		        <div onClick={this.hideDropDownHandler} className={dropDownClasses.join(" ")} aria-labelledby="navbarDropdown">
		        <Link route='/books/AdvancedCalculusSV/x1-20001'>
		          <a className="dropdown-item" href="/books/AdvancedCalculusSV/x1-20001">Advanced Calculus (Single Variable)</a>
		        </Link>
		        <Link route='/books/Analysis/x1-2000I'>
		          <a className="dropdown-item" href="/books/Analysis/x1-2000I">Analysis</a>
		        </Link>
		        <Link route='/books/ComplexAnalysis/x1-3000I'>
		          <a className="dropdown-item" href="/books/ComplexAnalysis/x1-3000I">Complex Analysis</a>
		        </Link>
		        <Link route='/books/ElementaryLinearAlgebra/x1-30001'>
		          <a className="dropdown-item" href="/books/ElementaryLinearAlgebra/x1-30001">Elementary Linear Algebra</a>
		        </Link>
		        <Link route='/books/EngineeringMath/x1-20001'>
		          <a className="dropdown-item" href="/books/EngineeringMath/x1-20001">Engineering Math</a>
		        </Link>
		        <Link route='/books/Linearalgebra/x1-30001'>
		          <a className="dropdown-item" href="/books/Linearalgebra/x1-30001">Linear Algebra</a>
		        </Link>
		        <Link route='/books/LinearAlgebraAndAnalysis/x1-30001'>
		          <a className="dropdown-item" href="/books/LinearAlgebraAndAnalysis/x1-30001">Linear Algebra and Analysis</a>
		        </Link>
		        <Link route='/books/TopicsInAnalysis/x1-2000I'>
		          <a className="dropdown-item" href="/books/TopicsInAnalysis/x1-2000I">Topics in Analysis</a>
		        </Link>
		        </div>

		        <div onClick={this.hideDropDownHandler} className="d-md-none dropdown-menu showDropDown" aria-labelledby="navbarDropdown">
		        <Link route='/books/AdvancedCalculusSV/x1-20001'>
		          <a className="dropdown-item" href="/books/AdvancedCalculusSV/x1-20001">Advanced Calculus (Single Variable)</a>
		        </Link>
		        <Link route='/books/Analysis/x1-2000I'>
		          <a className="dropdown-item" href="/books/Analysis/x1-2000I">Analysis</a>
		        </Link>
		        <Link route='/books/ComplexAnalysis/x1-3000I'>
		          <a className="dropdown-item" href="/books/ComplexAnalysis/x1-3000I">Complex Analysis</a>
		        </Link>
		        <Link route='/books/ElementaryLinearAlgebra/x1-30001'>
		          <a className="dropdown-item" href="/books/ElementaryLinearAlgebra/x1-30001">Elementary Linear Algebra</a>
		        </Link>
		        <Link route='/books/EngineeringMath/x1-20001'>
		          <a className="dropdown-item" href="/books/EngineeringMath/x1-20001">Engineering Math</a>
		        </Link>
		        <Link route='/books/Linearalgebra/x1-30001'>
		          <a className="dropdown-item" href="/books/Linearalgebra/x1-30001">Linear Algebra</a>
		        </Link>
		        <Link route='/books/LinearAlgebraAndAnalysis/x1-30001'>
		          <a className="dropdown-item" href="/books/LinearAlgebraAndAnalysis/x1-30001">Linear Algebra and Analysis</a>
		        </Link>
		        <Link route='/books/TopicsInAnalysis/x1-2000I'>
		          <a className="dropdown-item" href="/books/TopicsInAnalysis/x1-2000I">Topics in Analysis</a>
		        </Link>
		        </div>
		      </li>
		    </ul>
		  </div>
		</nav>
		</Aux>
	);
}

}; 

export default Navbar;