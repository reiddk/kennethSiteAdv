import React, { Component } from 'react';
import axios from '../../axiosBooks';
import utf8 from 'utf8';
import {Router} from '../../routes';

class SearchBox extends Component {
	state = {
  		textSearchable: null,
  		results: null,
  		totalNumResults: null,
  		stringSearching: null,
  		currentPageIndexes: null
	}

	indexOfSearchOnPage = 0;
	curr = 0;
	matchingElements = [];

	utf8Decode(toDecode) {
		let page = toDecode;
			try {
				page = utf8.decode(toDecode);
			} catch(e) {
				page = toDecode;
			}
		return page;
	}


  componentDidMount() {
    axios({        
        method:'GET',
        url: this.props.book + '/textTotal.json'
    })
    .then(res => {
    	const text = res.data;
    	this.setState({textSearchable: text});
    })
    .catch(e => {
    	console.log(e);
    });
  }

  pageSearch(value) {
  	let currentPage = document.getElementById('page-to-search').textContent.replace(/\n/gi, ' ');
  	console.log('new page search');
	let match = [];
	let pos = 0;
	  let num = -1;
	  let i = -1;
	  while (pos != -1) {
	    pos = currentPage.toLowerCase().indexOf(value.toLowerCase(), i + 1);
	    if (pos > -1) {
	    	match.push(pos);
	    }
	    num += 1;
	    i = pos;
	  }
	  return match;
  }

  findElemAtIndex(doc, index, endIndex) {
  	if (doc && doc.childNodes && doc.childNodes.length) {
	  	for (let i = 0; i < doc.childNodes.length; i++) {
	  		if (doc.childNodes[i].nodeName === '#text') {
	  			if (this.curr >= index && this.curr <= endIndex) {
	  				this.matchingElements.push({doc: doc, textNode: doc.childNodes[i]});
	  			} 
	  			if (this.curr < index && this.curr + doc.childNodes[i].nodeValue.length > endIndex) {
	  				this.matchingElements.push({doc: doc, textNode: doc.childNodes[i]});
	  			}
	  			this.curr += doc.childNodes[i].nodeValue.length;
	  			if (this.curr >= index && this.curr <= endIndex) {
	  				this.matchingElements.push({doc: doc, textNode: doc.childNodes[i]});
	  			} 
	  		} else {
	  			this.findElemAtIndex(doc.childNodes[i], index, endIndex);
	  		}
	  	}
  	}
  }

  navigateAway(direction = 1) {
  	const tempResults = [...this.state.results];
  	let initialPage = 0;
  	for (let i = 0; i < tempResults.length; i++) {
  		if (tempResults[i] === this.props.currPage) {
  			initialPage = i;
  		}
  	}
  	if (initialPage + direction < 0) {
  		initialPage = tempResults.length;
  	}

  	if (initialPage + direction > tempResults.length - 1) {
  		initialPage = 0;
  	}
  	initialPage += direction;
  	if (tempResults[initialPage]) {
	  	const pageId = tempResults[initialPage];
	  	Router.pushRoute('/books/' + this.props.book + '/' + pageId);
	  	const stringSearching = this.state.stringSearching;
		this.searchHandler({target: {value: stringSearching}});
		this.indexOfSearchOnPage = 0;
  	}
  }

  highlightPageIndex = (offset = 0) => {

  	let elems = document.querySelectorAll(".highlighted");

	[].forEach.call(elems, function(el) {
	    el.className = el.className.replace(/highlighted/, "");
	});

  	if (!this.state.stringSearching) {
  		return;
  	}
  	if (offset) {
  		this.indexOfSearchOnPage += offset;
  	} else {
  		this.indexOfSearchOnPage = 0;
  	}
  	console.log(this.indexOfSearchOnPage);
  	this.curr = 0;
  	this.matchingElements = [];
  	let placeOnPage = this.indexOfSearchOnPage;
  	if (placeOnPage === -1 && this.state.currentPageIndexes.length > 0) {
  		placeOnPage = 0;
  	}
  	if (placeOnPage < -1 || this.state.currentPageIndexes.length === 0) {
  		this.navigateAway(-1)
  	}
  	if (placeOnPage > this.state.currentPageIndexes.length - 1) {
  		this.navigateAway(1);
  	}
  	const indexes = [...this.state.currentPageIndexes];
  	const currIndex = indexes[placeOnPage];
  	if (this.state.stringSearching) {
	  	const stringSearchingLength = this.state.stringSearching.length;
	  	let doc = document.getElementById('page-to-search');
	  	this.findElemAtIndex(doc, currIndex, currIndex + stringSearchingLength, []);
	  	let navElem = null;
	  	for (let i = 0; i < this.matchingElements.length; i++) {
	  		let text = this.matchingElements[i].textNode;
	  		let newElem = document.createElement("span");
	  		newElem.innerText = text.nodeValue;
	  		newElem.classList.add('highlighted');
	  		try{
		  		this.matchingElements[i].doc.insertBefore(newElem, text);
		  		this.matchingElements[i].doc.removeChild(text);
		  		navElem = newElem;
	  		} catch(e) {}
	  	}
	  	if (navElem) {
	  		try {
			  	navElem.scrollIntoView(true);
			  	document.documentElement.scrollTop += -100;	
	  		} catch(e) {}
	  	}
  	}
  }

  searchHandler = (event) => {
  		let value = event.target.value;
  	if (value) {
	  	const searchAble = {...this.state.textSearchable};
	  	let totalNum = 0;
	  	const results = Object.keys(searchAble).filter(key => {
	  		let page = this.utf8Decode(searchAble[key]).replace(/\n/gi, ' ');

	  		const matches = page.match(new RegExp(value, 'ig'));
	  		if (matches && matches.length) {
	  			totalNum += matches.length;
	  			return true;
	  		} else {
	  			return false;
	  		}
	  	});
	  	const currentPageIndexes = this.pageSearch(value);
	  	this.curr = 0;
	  	this.setState({results: results, totalNumResults: totalNum, stringSearching: value, currentPageIndexes: currentPageIndexes});
  	} else {
	  	this.setState({results: null, totalNumResults: 0, stringSearching: null, currentPageIndexes: null });
	  	this.highlightPageIndex();
  	}

  }

	render() {
		let inputLoading = (
			<div style={{textAlign:'center'}}>
			<div className="lds-dual-ring">
			</div></div>
		);
		let results = null;
		if (this.state.textSearchable) {
			let plural = 's';
			if (this.state.results) {
				const resultsArr =  [...this.state.results];
				if (this.state.totalNumResults === 1) {
					plural = '';
				}
				results = <div>{this.state.totalNumResults} result{plural} found.</div>;
			}
			inputLoading = (
				<div>
					<div>
						<input style={{width: '60%'}} onChange={this.searchHandler} placeholder="Search Book:" type="text"/>
						<span className="next-prev-search">
						<i onClick={() => this.highlightPageIndex(-1)} className="fa fa-chevron-up searchButtons" aria-hidden="true"></i>&nbsp;&nbsp;
						<i onClick={() => this.highlightPageIndex(1)} className="fa fa-chevron-down searchButtons" aria-hidden="true"></i>
						</span>
					</div>
					{results}
				</div>
				);
		}
		return (
			<div>
				{inputLoading}
			</div>
		);
	}
}

export default SearchBox;