import React from "react";
import PostSummary from "./PostSummary";

const Postlist = ({ posts }) => {
  return (
    <div className="post-list section">
      {posts &&
        posts.map(post => {
          return <PostSummary post={post} key={post.id_posts}></PostSummary>;
        })}
    </div>
  );
};

export default Postlist;
