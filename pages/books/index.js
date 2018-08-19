import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";
import Head from 'next/head';
import axios from '../../axiosBooks';
import renderHTML from 'react-render-html';

class IndexPage extends Component {
  state = {
    url: null,
    title: 'Kenneth Kuttler',
    contents: null
  }

  getBook(url) {
    axios.get(url)
      .then(res => {
        const contents = res.data;
        this.setState({ contents: contents });
      })
      .catch(e => e);
  }

  componentDidMount () {
    if (this.props.theUrl) {
      this.getBook(this.props.theUrl);
    }
  }

  componentDidUpdate(prevProps) {
    if(prevProps.theUrl !== this.props.theUrl) {
      this.getBook(this.props.theUrl);
    }
  }

  static getInitialProps({query}) {
    let nameToTitle = [
      {url: 'AdvancedCalculusSV/contentsIndex.json', title: 'Advanced Calculus Single Variable'},
      {url: 'Analysis/contentsIndex.json', title: 'Analysis'},
      {url: 'ComplexAnalysis/contentsIndex.json', title: 'Complex Analysis'},
      {url: 'ElementaryLinearAlgebra/contentsIndex.json', title: 'Elementary Linear Algebra'},
      {url: 'EngineeringMath/contentsIndex.json', title: 'Engineering Math'},
      {url: 'Linearalgebra/contentsIndex.json', title: 'Linear Algebra'},
      {url: 'LinearAlgebraAndAnalysis/contentsIndex.json', title: 'Linear Algebra and Analysis'},
      {url: 'TopicsInAnalysis/contentsIndex.json', title: 'Topics In Analysis'},
    ];
    let title = "Kenneth Kuttler";
    let url = null;
    if (query.slug) {
      for (let i = 0; i < nameToTitle.length; i++) {
        if (query.slug.match(new RegExp(nameToTitle[i], 'i'))) {
          title = nameToTitle[i].title;
          url = nameToTitle[i].url;
        }
      }
    }
    const promise = new Promise((resolve, reject) => {
        resolve({ appName: title, theUrl: url });
    });
    return promise;
  }

  render() {
    let bookHtml = null;
    if (this.state.html) {
      bookHtml = this.state.html;
    }
    return (
    <div className="blogpost-component">
      <Head>
        <title>{this.props.appName}</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
      </Head>
      </div>
    );
  }
}

export default IndexPage;
