import React, { Component } from "react";

class SignIn extends Component {
  state = {
    search: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="nav-wrapper">
        <form className="search-form" onSubmit={this.handleSubmit}>
          <div className="input-field">
            <input type="search" id="search" onChange={this.handleChange} />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
