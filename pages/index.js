import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";
import Head from 'next/head';

class IndexPage extends Component {
  static getInitialProps(context) {
    const promise = new Promise((resolve, reject) => {
        resolve({ appName: "Super App" });
    });
    return promise;
  }

  render() {
    return (
      <div>
      <Head>
        <title>My styled page</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
      </Head>
      </div>
    );
  }
}

export default IndexPage;
