import React from 'react'
import Layout from '../components/layout';
import "../components/layout.css";
import { ExampleButton } from '../components/button';

export default () => (
  <Layout>
    <h1 style={{ color: "green", textTransform: "uppercase" }}>Hello from Gatsby</h1>
    <ExampleButton>click</ExampleButton>
  </Layout>
)