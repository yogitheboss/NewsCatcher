import React, { Component } from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import News from "./components/News";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
export default class App extends Component {
  render() {
    let pageNo = 8
    return (
      <div>
        <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<News key="general" pageSize={pageNo} country='in' category='general'/>}/>
          <Route exact path="/Sports" element={<News key="sports"pageSize={pageNo} country='in' category='sports'/>}/>
          <Route exact path="/Business" element={<News key="business" pageSize={pageNo} country='in' category='business'/>}/>
          <Route exact path="/Entertainment" element={<News key="entertainment" pageSize={pageNo} country='in' category='entertainment'/>}/>
          <Route exact path="/Science" element={<News key="science"pageSize={pageNo} country='in' category='science'/>}/>
          <Route exact path="/Health" element={<News key="health"pageSize={pageNo} country='in' category='health'/>}/>
          <Route exact path="/Technology" element={<News key="technology" pageSize={pageNo} country='in' category='technology'/>}/>
         
        </Routes>
        </Router>
      </div>

    );
  }
}
