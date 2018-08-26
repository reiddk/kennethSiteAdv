import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";
import Head from 'next/head';
import Header from '../components/header/header';
import Navbar from '../components/navbar/navbar';
import Layout from '../components/layout/layout'
import Homepage from '../components/homepage/homepage'

class IndexPage extends Component {
  static getInitialProps(context) {
    const promise = new Promise((resolve, reject) => {
        resolve({ appName: "Kenneth Kuttler" });
    });
    return promise;
  }

  render() {
    return (
      <Layout>
      <div className="blogpost-component">
          <Head>
              <title>Kenneth Kuttler</title>
              <link rel="stylesheet" href="/static/bootstrap.min.css"/>
              <link rel="stylesheet" href="/static/styles.css"/>
              <link rel="stylesheet" href="/static/fonts/font-awesome.min.css"/>
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
              <meta name="description" content="This is the personal website of Kenneth Kuttler. This has some of the books he has written in pdf form. They are free to download and use. Contains books such as Linear Algebra, Analysis, Single Variable Advanced Calculus, and more." />
          </Head>
          <div className="container">
              <div className="row">
                <Navbar selected="Home"/>
              </div>
              <Homepage />
          </div>
      </div>
      </Layout>
    );
  }
}

export default IndexPage;
