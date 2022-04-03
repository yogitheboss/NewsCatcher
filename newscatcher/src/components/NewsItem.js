import React, { Component } from "react";

export default class NewsItem extends Component {
  render(){
  let { title, description, imgUrl ,newsUrl} = this.props;
  return (
      <div className="my-3">
        <div className="card">
          <img src={imgUrl?imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzVoxHsNEztGWOV4UN7UKLVbfkPGp14t8iSgrpScY&s"} className="card-img-top" alt="..." />

          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} rel="noreferrer" className="btn btn-dark ">
            Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
