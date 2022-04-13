import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import "../index.css";
import PropTypes from "prop-types";
export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 7,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  articles = [];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }
  async updatePage() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=55c7e6a22d60449892bca4b70dca2cb6&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }
  handleNextClick = async () => {
    await this.setState({ page: this.state.page + 1 });
    this.updatePage();
  };
  handlePrevClick = async () => {
    await this.setState({ page: this.state.page - 1 });
    this.updatePage();
  };

  async componentDidMount() {
  this.updatePage();
  }
  render() {
    return (
      <div>
        <div className="container my-3">
          <h2 className="text-center my-3">News Catcher- Top Headlines</h2>
          {this.state.loading && <Spinner />}
          <div className="row my-3">
            <div className="row my-3">
              {!this.state.loading &&
                this.state.articles.map((element) => {
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
                        author={element.author}
                        date={element.publishedAt}
                        source={element.source.name}
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
                id="button1"
                disabled={
                  this.state.page + 1 >
                  Math.ceil(this.state.totalResults / this.props.pageSize)
                }
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
