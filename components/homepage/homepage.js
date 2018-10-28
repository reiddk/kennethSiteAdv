import React from 'react';
import {Link} from '../../routes';
import PageIcon from '../pageIcon/pageIcon';
import BooksToTitles from '../../enums/booksToTitles';

const homepage = (props) => {
  let pageIcons = BooksToTitles.map(book => {
    return (
        <div key={book.key} className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
          <PageIcon first={book.first} book={book.book} title={book.title}/>
        </div>
    );
  });

	return (
    <div className="container" style={{marginTop:'100px'}}>
      <div className="row">
        <h4>This is the personal website of Dr. Kenneth Kuttler. You can download these books as a PDF, or read them online without downloading. If you view the books online the website will use cookies to keep track of where you were at in each respective book.</h4>
      </div>
        <div className="row">
          {pageIcons}
        </div>
    </div>
	);
}

export default homepage;