import React from 'react'
import { initGA, logPageView } from '../../utils/analytics'

export default class Layout extends React.Component {
  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView();
    document.documentElement.addEventListener('build', function (e) { 
	    if (!window.GA_INITIALIZED) {
	      initGA()
	      window.GA_INITIALIZED = true
	    }
	    logPageView();
     }, false);
  }
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}