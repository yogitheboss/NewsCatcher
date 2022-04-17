import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import "../index.css";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

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
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )}-NewsCatcher `;
  }
  async updatePage() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=55c7e6a22d60449892bca4b70dca2cb6&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }

  fetchMoreData = async () => {
    
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=55c7e6a22d60449892bca4b70dca2cb6&pageSize=${this.props.pageSize}&page=${this.state.page+1}`;
    this.setState({ page: this.state.page + 1 });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
    });
  };
  async componentDidMount() {
    this.updatePage();
  }
  render() {
    return (
      <>
        <div className="container my-3">
          <h2 className="text-center"style={{marginTop:"80px"}}>
            News Catcher- Top {this.capitalizeFirstLetter(this.props.category)}{" "}
            Headlines
          </h2>
          {this.state.loading && <Spinner />}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner />}
          >
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
                        author={element.author}
                        date={element.publishedAt}
                        source={element.source.name}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </InfiniteScroll>
        </div>
      </>
    );
  }
}
