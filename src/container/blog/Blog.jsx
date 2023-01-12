import React from 'react'
import { Article } from '../../components'
import "./blog.css"
import { blog01, blog02, blog03, blog04, blog05 } from './data';

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening,<br/> We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
        <Article blogImage={blog01} />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article blogImage={blog02} />
          <Article blogImage={blog03} />
          <Article blogImage={blog04} />
          <Article blogImage={blog05} />
        </div>

      </div>
    </div>
  )
}

export default Blog