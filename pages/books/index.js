import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";
import Head from 'next/head';
import axios from '../../axiosBooks';
import Page from '../../components/page/index';
import Navbar from '../../components/navbar/navbar';
import Header from '../../components/header/header';
import BookNav from '../../components/bookNav/bookNav';
import pako from 'pako';
import base64 from 'base-64';
import sanitizeHTML from 'sanitize-html';
import Ads from '../../components/ads/ads';
import Layout from '../../components/layout/layout'

class IndexPage extends Component {
  state = {
    url: null,
    title: 'Kenneth Kuttler',
    contents: null,
    page: null
  }

  static async getInitialProps({query}) {
    let nameToTitle = [
      {book: 'AdvancedCalculusSV', title: 'Advanced Calculus Single Variable'},
      {book: 'Analysis', title: 'Analysis'},
      {book: 'ComplexAnalysis', title: 'Calculus of Real and Complex Variables'},
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

    const response = await axios.get(book + '/' + pageId + '.txt');
    let page = null;
    if(response && response.data){
      page = response.data;
      page = pako.inflate(base64.decode(page), { to: 'string' });
      if (page.indexOf('class="subsectionHead">') > -1 && page.indexOf('<h4 class="subsectionHead">') === -1) {
        page = page.replace('class="subsectionHead">', '<h4 class="subsectionHead">');
      }
      if (page.match(/<h4$/i)) {
        page = page.replace(/<h4$/i, '');
      }
    }
    page = page.replace(/<script/gi, '');
    let description = page.substring(0, 2000).replace(/\n/g, ' ').match(/^.*<\/h[1-6]>/);
    if (description && description[0]) {
      description = description[0].replace(/<[^>]*>/gi, '');
    } else {
      description = '';
    }
    let builtContents = null;
    let lastPage = null;
    let currPage = null;
    let nextPage = null;
    let index = 0;
    if (contentsIndex) {
        let tree = {part: "", chapter: "", section: "", subsection: ""};
         builtContents = contentsIndex.map(page => {

          if (lastPage !== null && nextPage === null) {
            nextPage = page.link;
          }
          if (page.link === pageId) {
            lastPage = currPage;
            if (index === 0) {
              nextPage = contentsIndex[1].link;
            }
          }
            currPage = page.link;

          if (page.type === 'part') {
            tree['part'] = page.link;
            tree['chapter'] = "";
            tree['section'] = "";
            tree['subsection'] = "";
          }
          if (page.type === 'chapter') {
            tree['chapter'] = page.link;
            tree['section'] = "";
            tree['subsection'] = "";
          }
          if (page.type === 'section') {
            tree['section'] = page.link;
            tree['subsection'] = "";
          }
          if (page.type === 'subsection') {
            tree['subsection'] = page.link;
          }
          const outPage = {...page};
          outPage['tree'] = {...tree};
          outPage['plainText'] = outPage.name.replace(/<(?:.|\n)*?>/gm, '').replace(/(CONTENTS|\n)*/gi, '').trim();
          index++;
          return outPage;
        });
    }
    description = 'Free pdf download of ' + book + '. ' + description;
    const promise = new Promise((resolve, reject) => {
        resolve({ appName: title, theBook: book, page: page, contents: builtContents, currPageId: pageId, lastPage: lastPage, nextPage: nextPage, description: description });
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
      <Layout>
      <div className="blogpost-component">

          <Head>
              <title>{this.props.appName}</title>
              <link rel="stylesheet" href="/static/bootstrap.min.css"/>
              <link rel="stylesheet" href="/static/styles.css"/>
              <link rel="stylesheet" href="/static/fonts/font-awesome.min.css"/>
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
              <script src="/static/custom-scripts/ads.js"></script>
              <meta name="description" content={this.props.description} />
          </Head>
          
              <div className="row">
                <Navbar selected={this.state.url}/>
              </div>
              <div>
                <Header title={this.props.appName} />
              </div>  
              <div className="container">
              <div className="row">
                  <div className="col-md-9">
                  <div className="d-md-none">
                      <Ads />
                  </div>
                      <Page html={bookHtml} book={this.props.theBook} lastPage={this.props.lastPage} nextPage={this.props.nextPage}/>
                  </div>
                  <div className="col-md-3" style={{padding: 0}}>
                  <div className="d-none d-md-block">
                      <Ads />
                  </div>
                      <BookNav title={this.props.appName} contents={this.props.contents} book={this.props.theBook} currPage={this.props.currPageId}/>
                  </div>
              </div>
          </div>
      </div>
      </Layout>
    );
  }
}

export default IndexPage;
