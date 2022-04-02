import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  render() {
    return (
      <div>
          <div className="container my-3">
          <h2>News Catcher</h2>
          <div className="row">
              <div className="col-md-4">
              <NewsItem title="MyTitle" description="myDesc"/>
              </div>
              <div className="col-md-4">
              <NewsItem/>
              </div>
              <div className="col-md-4">
              <NewsItem/>
              </div>
         
          </div>
          </div>
      </div>
    )
  }
}
