import React, { Component } from "react";

export default class componentName extends Component {
  state = {
    name: "React",
    age: 0,
  };

  //incremente la valeur de 1
  incrementButton = (e) => {
    var age = this.state.age;
    this.setState({
      age: age + 1,
    });

    console.log("This is state : ", this.state);
  };
  
  ///change la valeur au moment ou il ecrit
  isTyping = (e) => {
    var value = e.target.value;
    this.setState({
      name: value,
    });
    console.log("This is what you type : ", value);
  };

  //comment prevenir le comportement par defaut d'un ofrmulaire
    handleSubmitName = (e) => {
     e.preventDefault();
     console.log('Form submitted : ',this.state.name);
     
    };

  render() {
    return (
      <div>
        Hello my name is : {this.state.name}
        <div>
          <button onClick={this.incrementButton}>Click to increment </button>
        </div>
        counter : {this.state.age}
        <div>
          <h2>Change the name Dom by input</h2>
          <form onSubmit={this.handleSubmitName}>
            <input type="text" onChange={this.isTyping}></input>
            <button>Submit your name </button>
          </form>
        </div>
      </div>
    );
  }
}
