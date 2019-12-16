import React from "react";
import { connect } from "react-redux";

const PostDetails = props => {
  const { post } = props;
  if (post) {
    return (
      <div className="container section post-details">
        <div className="card z-depth-0 purple">
          <div className="card-content">
            <span className="card-title flow-text">{post.post_title}</span>
            <p>{props.post.post_content}</p>
          </div>
          <div className="card action grey-lighten-4 grey-text z-depth-0 purple lighten-1">
            <div className="grey-text">Posted by {props.post.username}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Loading post...</div>;
  }
};

//Yhdistetään post detailseissa tarvittavat tiedot reduxilla
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const posts = state.post.posts;
  const post = posts ? posts[id - 1] : null;
  return {
    post: post
  };
};

export default connect(mapStateToProps)(PostDetails);
