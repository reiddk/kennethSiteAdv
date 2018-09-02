import Reat, { Component } from 'react';

class Ads extends Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

	render () {
		return (
			<div className="ad-wrapper">
	        <ins className='adsbygoogle'
	          style={{ display: 'block' }}
	          data-ad-client='ca-pub-2028314042015526' />
			</div>
		);
	}
}

export default Ads;