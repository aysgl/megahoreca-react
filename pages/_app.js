import React from "react";
import App from 'next/app';
import Layout from "./layout"
import SSRProvider from 'react-bootstrap/SSRProvider';
import '../styles/globals.scss'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps: pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;

    return (
      <SSRProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SSRProvider>
    );
  }
}

export default MyApp;
