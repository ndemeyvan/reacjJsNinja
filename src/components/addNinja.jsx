import React, { Component } from "react";

export default class componentName extends Component {
  state = {
    name: null,
    age: null,
    belt: null,
  };
  ///changer l'etat des variable de mon component base sur l'id de l'input
  
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  ///validater le formulaire en annulant la reaction par defaut de mon formulaire.
  handleSubmitNinja = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmitNinja}>
          <label htmlFor="name">Enter the name ninja</label>
          <input type="text" id="name" onChange={this.handleChange}></input>
          <br />
          <label htmlFor="age">Enter the age of the ninja</label>
          <input type="number" id="age" onChange={this.handleChange}></input>
          <br />
          <label htmlFor="belt">Enter the belt of the ninja</label>
          <input type="number" id="belt" onChange={this.handleChange}></input>
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
