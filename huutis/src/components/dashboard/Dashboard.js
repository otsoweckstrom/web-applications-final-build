import React, { Component } from "react";
import Notifications from "./Notifications";
import Postlist from "../posts/Postlist";
import Searchbar from "../layout/Searchbar";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m8">
            <Searchbar></Searchbar>
          </div>
          <div className="col s6 m2 offset-m2">
            <Notifications />
          </div>
        </div>

        <div className="row">
          <div className="col s12 m8 offset-m1">
            <Postlist posts={posts} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.post.posts
  };
};

export default connect(mapStateToProps)(Dashboard);
