import React from 'react'
import Layout from '../components/layout';
import styles from '../components/blog.module.css';

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1 className={styles.header}>This is our blog page</h1>
        <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Consequuntur optio quia sequi fuga consectetur dolorum sunt asperiores quis minus? Quo!</p>
      </div>
    </Layout>
  )
}

export default blog
