import React, { Component } from 'react'
import Layout from '../components/layout';

export default class products extends Component {
  render() {
    return (
      <Layout>
        <h1>This is our product page</h1>
        <p className="products-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloribus, expedita. Excepturi, optio eaque officiis, omnis modi
      recusandae culpa debitis in totam sit illo repudiandae ullam?</p>
      </Layout>
    )
  }
}
