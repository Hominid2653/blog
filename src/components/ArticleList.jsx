import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  return (
    <main className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
          image={post.image}
        />
      ))}
    </main>
  );
}

export default ArticleList;