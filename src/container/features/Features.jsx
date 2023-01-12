import React from 'react'
import { Feature } from '../../components'
import "./features.css"
import { featureData } from './Data'
const Features = () => {
  return (
    <div className="gpt3__Features section__padding" id="features">
      <div className="gpt3__Features-content">
        <h1 className="gradient__text">The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__Features-list__feature">
        {featureData.map((item,index) => {
          return <Feature title={item.title} text={item.text} key={item.title + index} />
        })}
      </div>
    </div>
  )
}

export default Features