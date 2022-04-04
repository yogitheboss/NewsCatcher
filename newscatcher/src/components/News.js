import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }
  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=55c7e6a22d60449892bca4b70dca2cb6&page=${
      this.state.page + 1
    }`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({ page: this.state.page + 1, articles: parseData.articles });
  };
  handlePrevClick =async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=55c7e6a22d60449892bca4b70dca2cb6&page=${
      this.state.page - 1
    }`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({ page: this.state.page + 1, articles: parseData.articles });
  };
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=55c7e6a22d60449892bca4b70dca2cb6";
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({ articles: parseData.articles });
  }
  render() {
    return (
      <div>
        <div className="container my-3">
          <h2 className="text-center my-3">News Catcher- Top Headlines</h2>
          <div className="row my-3">
            <div className="row my-3">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 80)
                          : ""
                      }
                      imgUrl={element.urlToImage}
                      newsUrl={element.url}
                    />
                  </div>
                );
              })}
            </div>
            <div className="container d-flex justify-content-between">
              <button
                type="button"
                disabled={this.state.page <= 1}
                className="btn btn-dark"
                onClick={this.handlePrevClick}
              >
                &larr; Previous
              </button>
              <button
                type="button"
                className="btn btn-dark mx-3"
                onClick={this.handleNextClick}
              >
                Next &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
