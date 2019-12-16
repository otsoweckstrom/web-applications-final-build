import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../../store/actions/postActions";

class CreatePost extends Component {
  state = {
    users: [],
    user: {
      username: "",
      password: ""
    },
    post: {
      title: "",
      content: ""
    }
  };

  componentDidMount() {
    this.getUsers();
  }

  //Haetaan käyttäjät
  getUsers = _ => {
    fetch("http://localhost:4000/users")
      .then(response => response.json())
      .then(response => this.setState({ users: response.data }))
      .catch(err => console.error(err));
  };

  addPost = _ => {
    const { users, user, post } = this.state;

    //Tarkistetaan ovatko tunnukset oikein
    if (user.password && user.username) {
      for (var i = 0; i < users.length; i++) {
        if (
          user.username === users[i].username &&
          user.password === users[i].password
        ) {
          fetch(
            `http://localhost:4000/createpost?username=${user.username}&post_title=${post.title}&post_content=${post.content}`
          )
            .then(response => response.json())
            .catch(err => console.error(err));
        }
      }
    } else {
      console.log("Please insert login credentials");
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { user, post } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="purple">
          <div className="input-field ">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={post.title}
              onChange={e =>
                this.setState({ post: { ...post, title: e.target.value } })
              }
            />
          </div>
          <div className="input-field">
            <label htmlFor="content">Content</label>
            <input
              type="text"
              id="content"
              value={post.content}
              onChange={e =>
                this.setState({ post: { ...post, content: e.target.value } })
              }
            />
          </div>
          <div className="input-field ">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={user.username}
              onChange={e =>
                this.setState({ user: { ...user, username: e.target.value } })
              }
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={user.password}
              onChange={e =>
                this.setState({ user: { ...user, password: e.target.value } })
              }
            />
          </div>

          <div>
            <button
              className="purple  lighten-2 z-depth-0"
              onClick={this.addPost}
            >
              Post
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createPost: post => dispatch(createPost(post))
  };
};

export default connect(null, mapDispatchToProps)(CreatePost);
