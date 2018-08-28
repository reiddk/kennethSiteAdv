import React, { Component } from 'react';
import axios from '../../axiosBooks';
import utf8 from 'utf8';
import {Router} from '../../routes';

class SearchBox extends Component {
	state = {
		results: null
	}

	indexOfSearchOnPage = 0;
	curr = 0;
	matchingElements = [];
	currentPage = null;
	endBeginning = 0;
	textSearchable = null;
	totalNumResults = 0;
	stringSearching = null;
	currentPageIndexes = null;

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
    	this.currentPage = document.getElementById('page-to-search').textContent.replace(/\n/gi, ' ');
    	this.textSearchable = text;
    	this.setState({results: ['']});
    })
    .catch(e => {
    });
    let self = this;
    document.documentElement.addEventListener('build', function (e) { 
    	self.currentPage = document.getElementById('page-to-search').textContent.replace(/\n/gi, ' ');
	  	const stringSearching = self.stringSearching;
		self.searchHandler({target: {value: stringSearching}});
		if (self.endBeginning && self.currentPageIndexes && self.currentPageIndexes.length) {
			self.indexOfSearchOnPage = self.currentPageIndexes.length -1;
		} else {
			self.indexOfSearchOnPage = 0;
		}
		self.searchPageWithIndexes();
     }, false);
  }

  searchPageWithIndexes() {
  	let self = this;
		if (self.currentPageIndexes) {
			const indexes = [...self.currentPageIndexes];
  			let placeOnPage = self.indexOfSearchOnPage;
		  	const currIndex = indexes[placeOnPage];
		  	if (self.stringSearching) {
			  	const stringSearchingLength = self.stringSearching.length;
			  	let doc = document.getElementById('page-to-search');
			  	self.findElemAtIndex(doc, currIndex, currIndex + stringSearchingLength, []);
			  	let navElem = null;
			  	for (let i = 0; i < self.matchingElements.length; i++) {
			  		let text = self.matchingElements[i].textNode;
			  		let newElem = document.createElement("span");
			  		newElem.innerText = text.nodeValue;
			  		newElem.classList.add('highlighted');
			  		try{
				  		self.matchingElements[i].doc.insertBefore(newElem, text);
				  		self.matchingElements[i].doc.removeChild(text);
				  		navElem = newElem;
			  		} catch(e) {
			  		}
			  	}
			  	if (navElem) {
			  		try {
					  	navElem.scrollIntoView(true);
					  	document.documentElement.scrollTop += -100;	
			  		} catch(e) {}
			  	}
		  	}	
		}
  }

  pageSearch(value) {
  	let currentPage = this.currentPage;
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
  	tempResults.shift();
  	for (let i = 0; i < tempResults.length; i++) {
  		if (tempResults[i] === this.props.currPage) {
  			initialPage = i;
  		}
  	}
  	if (initialPage + direction < 0) {
  		initialPage = tempResults.length - 1;
  	} else if (initialPage + direction > tempResults.length - 1) {
  		initialPage = 0;
  	} else {
  		initialPage += direction;
  	}
  	if (tempResults[initialPage]) {
	  	const pageId = tempResults[initialPage];
	  	if (direction < 0) {
	  		this.endBeginning = 1;
	  	} else {
	  		this.endBeginning = 0;
	  	}
	  	Router.pushRoute('/books/' + this.props.book + '/' + pageId);
  	}
  }

  highlightPageIndex = (offset = 0) => {
  	let elems = document.querySelectorAll(".highlighted");

	[].forEach.call(elems, function(el) {
	    el.className = el.className.replace(/highlighted/, "");
	});

  	if (!this.stringSearching) {
  		return;
  	}

  	this.indexOfSearchOnPage += offset;

  	this.curr = 0;
  	this.matchingElements = [];
  	let placeOnPage = this.indexOfSearchOnPage;
  	if (placeOnPage < 0 || this.currentPageIndexes.length === 0) {
  		this.navigateAway(-1)
  	} else if (placeOnPage > this.currentPageIndexes.length - 1) {
  		this.navigateAway(1);
  	} else {
  		this.searchPageWithIndexes();
  	}
  }

  searchHandler = (event) => {
  		let value = event.target.value;
  	if (value) {
	  	const searchAble = {...this.textSearchable};
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
	  	this.setState({results: results});
	  	this.totalNumResults = totalNum;
	  	this.stringSearching = value;
	  	this.currentPageIndexes = currentPageIndexes;
  	} else {
	  	this.setState({results: null});
  		this.totalNumResults = 0;
  		this.stringSearching = null;
  		this.currentPageIndexes = null;
  		this.indexOfSearchOnPage = 0;
  	}
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.highlightPageIndex(1);
    }
  }

	render() {
		let inputLoading = (
			<div style={{textAlign:'center'}}>
			<div className="lds-dual-ring">
			</div></div>
		);
		let results = null;
		if (this.textSearchable) {
			let plural = 's';
			if (this.state.results) {
				const resultsArr =  [...this.state.results];
				if (this.totalNumResults === 1) {
					plural = '';
				}
				//results = <div>{this.totalNumResults} result{plural} found.</div>;
			}
			inputLoading = (
				<div>
					<div>
						<input onKeyPress={this.handleKeyPress} style={{width: '60%'}} onChange={this.searchHandler} placeholder="Search Book:" type="text"/>
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