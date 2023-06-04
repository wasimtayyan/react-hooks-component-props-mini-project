import React from "react";
import blogData from "../data/blog";
import logo from "../assets/logo";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App() {
  return (
    <div className="App">
      <Header name ={blogData.name}/>
      <About about={blogData.about} logo={logo}/>
      <ArticleList posts = {blogData.posts}/>
    </div>
  );
}

export default App;
