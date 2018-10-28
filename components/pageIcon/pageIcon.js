import React from 'react';
import {Link} from '../../routes';
import DownloadPdf from '../downloadPdf/downloadPdf';
import Cookies from 'universal-cookie';

const pageIcon = (props) => {
	const cookies = new Cookies();

	let link = '/books/' + props.book + '/' + props.first;
	if (cookies.get(props.book)) {
		link = '/books/' + props.book + '/' + cookies.get(props.book);
	}
	return  (<div className="linkBox">
              <div>
              <Link route={link}>
                <a href={link}>{props.title}</a>
              </Link>
              </div>
              <div>
                 <DownloadPdf book={props.book} bookTitle={props.title}/>
              </div>
            </div>);
};

export default pageIcon;