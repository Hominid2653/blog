import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  return (
    <main className="grid gap-8 grid-cols-1 md:grid-cols-2 items-stretch">
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