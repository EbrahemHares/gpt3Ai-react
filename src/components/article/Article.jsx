import React from 'react'
import "./article.css"


const Article = ({blogImage}) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={blogImage} alt="blogImage" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
        <p>Sep 26, 2021</p>
        <h1>GPT-3 and Open  AI is the future. Let us exlore how it is?</h1>
        </div>
        <div>
        <p>Read Full Article</p>  
        </div>
      </div>
    </div>
  )
}

export default Article