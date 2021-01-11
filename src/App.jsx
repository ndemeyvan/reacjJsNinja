// import logo from "./logo.svg";
import "./App.css";
import Ninja from "./components/ninja";
import React, { Component } from "react";
import AddNinja from "./components/addNinja";

export default class App extends Component {
  state = {
    ninja: [
      { name: "Ndeme yvan", age: 30, belt: "Black", id: 1 },
      { name: "Akah", age: 15, belt: "Yellow", id: 2 },
      { name: "Olinga", age: 30, belt: "Morray", id: 3 },
    ],
  };

  //function like a props
  addNinja = (ninja) => {
    console.log('Try to add ninja');
    
    ninja.id = Math.random();
    let newNinja = [...this.state.ninja, ninja];
    this.setState({
      ninja: newNinja,
    });
  };

  //fonction qui sera passer comme un 
  //props pour lancer la suppression depuis l'item
  deleteNinja = (id)=>{
    console.log(id);
    let newNinja = this.state.ninja.filter((item) => item.id !== id);
    this.setState({
      ninja:newNinja,
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My first react app</h1>
        <p>Welcome to my first app !</p>
        {/* Add the ninja into the array */}
        <AddNinja addNinja={this.addNinja} />
        <br />
        <Ninja
          name="Ndeme Yvan"
          age="25"
          belt="Black"
          ninjas={this.state.ninja}
          deleteNinja={this.deleteNinja}
        />
      </div>
    );
  }
}


