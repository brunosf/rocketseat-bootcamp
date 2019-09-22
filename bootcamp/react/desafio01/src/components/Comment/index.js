import React from "react";

import "./style.css";

function Comment({ data: { id, author, content } }) {
  return (
    <div key={id} class="comment">
      <img class="comment-avatar" src={author.avatar} />
      <p class="comment-content">
        <strong>{author.name}</strong>
        {content}
      </p>
    </div>
  );
}

export default Comment;
