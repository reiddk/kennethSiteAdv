import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";
import Head from 'next/head';
import axios from '../../axiosBooks';
import Page from '../../components/page/index';
import Navbar from '../../components/navbar/navbar';

class IndexPage extends Component {
  state = {
    url: null,
    title: 'Kenneth Kuttler',
    contents: null,
    page: null
  }

  static async getInitialProps({query}) {
    console.log(query);
    let nameToTitle = [
      {book: 'AdvancedCalculusSV', title: 'Advanced Calculus Single Variable'},
      {book: 'Analysis', title: 'Analysis'},
      {book: 'ComplexAnalysis', title: 'Complex Analysis'},
      {book: 'ElementaryLinearAlgebra', title: 'Elementary Linear Algebra'},
      {book: 'EngineeringMath', title: 'Engineering Math'},
      {book: 'Linearalgebra', title: 'Linear Algebra'},
      {book: 'LinearAlgebraAndAnalysis', title: 'Linear Algebra and Analysis'},
      {book: 'TopicsInAnalysis', title: 'Topics In Analysis'},
    ];

    let title = "Kenneth Kuttler";
    let book = null;
    let pageId = query.page;
    if (query.book) {
      for (let i = 0; i < nameToTitle.length; i++) {
        if (query.book.match(new RegExp(nameToTitle[i].book, 'i'))) {
          title = nameToTitle[i].title;
          book = nameToTitle[i].book;
        }
      }
    }
    const responseContents = await axios.get(book + '/contentsIndex.json');
    let contentsIndex = null;
    if(responseContents && responseContents.data){
      contentsIndex = responseContents.data
    }

    const response = await axios.get(book + '/' + pageId + '.html');
    let page = null;
    if(response && response.data){
      page = response.data
    }
    const promise = new Promise((resolve, reject) => {
        resolve({ appName: title, theBook: book, page: page, contents: contentsIndex });
    });
    return promise;
  }

  render() {
    let bookHtml = null;
    if (this.props.page) {
      bookHtml = this.props.page;
    }
    if (this.state.page) {
      bookHtml = this.state.page;
    }
    return (
      <div className="blogpost-component">

          <Head>
              <title>{this.props.appName}</title>
              <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
              <link rel="stylesheet" href="/static/styles.css"/>
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </Head>
          <div className="container">
              <div className="row">
                <Navbar selected={this.state.url}/>
              </div>
              <div className="row">
                  <div className="col-sm-1">
                      asdf
                  </div>
                  <div className="col-sm-9">
                      <Page html={bookHtml}/>
                  </div>
                  <div className="col-sm-2 hidden-xs">
                      asdf
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default IndexPage;
