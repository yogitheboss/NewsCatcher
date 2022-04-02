import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
      let {title,description}=this.props;
    return (
      <div><div className="card">
      <img src="https://www.gannett-cdn.com/presto/2022/04/02/USAT/1b36f218-2b6c-4bb9-b5fb-2d5e89dd48ee-AP_Russia_Ukraine_War.jpg?auto=webp&crop=3413,1920,x0,y96&format=pjpg&width=1200" className="card-img-top" alt="..."/>
    
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div></div>
    )
  }
}
