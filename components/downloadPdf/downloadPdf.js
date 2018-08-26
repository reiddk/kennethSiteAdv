import react, { Component } from 'react';
import axios from '../../axiosBooks';

class DownloadPdf extends Component {

	downloadPdfHandler = (book) => {
		if (book) {
			axios({
			  url: '/' + book + '/' + book + '.pdf',
			  method: 'GET',
			  responseType: 'blob', // important
			}).then((response) => {
			  const url = window.URL.createObjectURL(new Blob([response.data]));
			  const link = document.createElement('a');
			  link.href = url;
			  link.setAttribute('download', book + '.pdf');
			  document.body.appendChild(link);
			  link.click();
			});
		}
	}

	render() {
		return <div className="download-link"><a onClick={() => this.downloadPdfHandler(this.props.book)} href="#">Download {this.props.bookTitle} PDF</a></div>;
	}
}

export default DownloadPdf;