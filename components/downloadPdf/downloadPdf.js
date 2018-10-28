import react, { Component } from 'react';
import axios from 'axios';

class DownloadPdf extends Component {
	state = {
		url: '#',
		loading: false
	}

	download = () => {
		this.setState({loading: true});
		axios({
		  url: this.state.url,
		  method: 'GET',
		  responseType: 'blob',
		}).then((response) => {
		this.setState({loading: false});
		  const url = window.URL.createObjectURL(new Blob([response.data]));
		  const link = document.createElement('a');
		  link.href = url;
		  link.setAttribute('download', this.props.bookTitle + '.pdf');
		  document.body.appendChild(link);
		  link.click();
		})
		.catch(e => {
		  this.setState({loading: false});
		  alert('Unable to directly download PDF');
		});
	}

	componentDidMount() {
		this.setState({url: 'https://s3.us-east-2.amazonaws.com/kennethbooks/books' + '/' + this.props.book + '/' + this.props.book + '.pdf'});
	}

	render() {
		let loadingicon = null;
		if (this.state.loading) {
			loadingicon = <div className="lds-dual-ring"></div>;
		}
		return <div className="download-link"><span style={{float:'left'}} className="linkStyle" onClick={this.download}>{loadingicon}Download PDF</span><a style={{float:'right'}} href={this.state.url} target="_blank">View PDF</a></div>;
	}
}

export default DownloadPdf;