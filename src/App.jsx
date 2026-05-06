import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import ArticleList from "./components/ArticleList";
import blog from "./data/Blog"; 


function App() {
  return (
    <div>
      <Header name="My Personal Blog" />

      <About
        image="https://picsum.photos/150"
        about="Welcome to my blog where I share React learning notes and projects."
      />

      <ArticleList posts={blog} />
    </div>
  );
}

export default App;