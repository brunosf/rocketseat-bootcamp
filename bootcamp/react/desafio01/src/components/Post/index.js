import React from "react";

import Comment from "../Comment";

import "./style.css";

function Post({ data: { author, date, content, comments } }) {
  return (
    <article class="post">
      <header class="post-author">
        <img class="post-avatar" src={author.avatar} />
        <div class="post-author-content">
          <h2 class="post-author-name">{author.name}</h2>
          <time class="post-date">{date}</time>
        </div>
      </header>
      <p class="post-content">{content}</p>

      {comments.map(comment => (
        <Comment data={comment} />
      ))}
    </article>
  );
}

export default Post;
