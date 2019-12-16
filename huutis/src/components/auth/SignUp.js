import React, { Component } from "react";

class SignUp extends Component {
  state = {
    user: {
      username: "",
      password: ""
    }
  };

  //Making a server call to add a user into the database
  addUser = _ => {
    const { user } = this.state;

    if (user.username && user.password) {
      fetch(
        `http://localhost:4000/signup?username=${user.username}&password=${user.password}`
      )
        .then(response => response.json())
        .catch(err => console.error(err));
    }
  };

  render() {
    const { user } = this.state;
    return (
      <div className="container ">
        <form className="purple">
          <div className="red-text">
            <h5>
              Do not use any real credentials or passwords you use elsewhere
            </h5>
          </div>
          <h5 className="grey-text">Sign Up</h5>
          <div className="input-field">
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
              className="purple lighten-2 z-depth-1"
              onClick={this.addUser}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
