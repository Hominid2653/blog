import React from "react";
import blogData from "./blog";
import Header from "./Header";
import BlogList from "./BlogList";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <BlogList posts={blogData} />
      <Footer />
    </div>
  );
}

export default App;