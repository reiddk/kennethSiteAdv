import react, { Component } from 'react';

class DownloadPdf extends Component {
	state = {
		url: '#'
	}

	componentDidMount() {
		this.setState({url: 'https://s3.us-east-2.amazonaws.com/kennethbooks/books' + '/' + this.props.book + '/' + this.props.book + '.pdf'});
	}

	render() {
		return <div className="download-link"><a href={this.state.url} target="_blank">Download {this.props.bookTitle} PDF</a></div>;
	}
}

export default DownloadPdf;