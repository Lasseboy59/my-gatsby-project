import React from 'react'
import { Link } from 'gatsby'

const navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog Page</Link>
        </li>
        <li>
          <Link to="/products">Product Page</Link>
        </li>
        <li>
          <Link to="/examples">Examples Page</Link>
        </li>
      </ul>
    </nav>
  )
}

export default navbar
