import React, { Component } from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
export default class App extends Component {
  state={
    progress:10
  }
  setProgress=(progress)=>{
this.setState({progress:progress})
  }
  render() {
    let pageNo = 8
    return (
      <div>
        <Router>
        <NavBar />
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
      />
        <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress} key="general" pageSize={pageNo} country='in' category='general'/>}/>
          <Route exact path="/Sports" element={<News setProgress={this.setProgress} key="sports"pageSize={pageNo} country='in' category='sports'/>}/>
          <Route exact path="/Business" element={<News setProgress={this.setProgress} key="business" pageSize={pageNo} country='in' category='business'/>}/>
          <Route exact path="/Entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={pageNo} country='in' category='entertainment'/>}/>
          <Route exact path="/Science" element={<News setProgress={this.setProgress} key="science"pageSize={pageNo} country='in' category='science'/>}/>
          <Route exact path="/Health" element={<News setProgress={this.setProgress} key="health"pageSize={pageNo} country='in' category='health'/>}/>
          <Route exact path="/Technology" element={<News setProgress={this.setProgress} key="technology" pageSize={pageNo} country='in' category='technology'/>}/>
         
        </Routes>
        </Router>
      </div>

    );
  }
}
