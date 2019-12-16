import React, { Component } from "react";

class SignIn extends Component {
  state = {
    users: [],
    user: {
      username: "",
      password: ""
    }
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = _ => {
    fetch("http://localhost:4000/users")
      .then(response => response.json())
      .then(response => this.setState({ users: response.data }))
      .catch(err => console.error(err));
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    const { users, user } = this.state;
    e.preventDefault();
    if (user.password && user.username) {
      for (var i = 0; i < users.length; i++) {
        if (
          user.username === users[i].username &&
          user.password === users[i].password
        ) {
          console.log("Logged in");
          
        }
      }
    } else {
      console.log("Please insert login credentials");
    }
  };

  render() {
    const { user } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="purple">
          <h5 className="grey-text">Sign In</h5>
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
          <div className="input-field">
            <button
              className="purple  lighten-2 z-depth-0"
              onClick={this.handleSubmit}
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
