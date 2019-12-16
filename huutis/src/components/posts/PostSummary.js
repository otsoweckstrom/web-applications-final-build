import React from "react";
import { Link } from "react-router-dom";

const PostSummary = ({ post }) => {
  return (
    <div className="card z depth-0 post-summary">
      <div className="card-content grey-text purple">
        <Link to={"/post/" + post.id_posts}>
          <span className="card-title">{post.post_title} </span>
          <h6 className="grey-text">By {post.username}</h6>
        </Link>
      </div>
    </div>
  );
};

export default PostSummary;
