import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import ArticleList from "./components/ArticleList";
import blog from "./data/Blog"; 


function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="max-w-3xl mx-auto px-4 py-10 space-y-10">
        <Header name="My Personal Blog" />

        <About
          image="https://picsum.photos/200"
          about="Welcome to my blog where I share React learning notes and projects."
        />

        <ArticleList posts={blog} />
      </div>
    </div>
  );
}

export default App;