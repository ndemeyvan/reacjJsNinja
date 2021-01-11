// import logo from "./logo.svg";
import "./App.css";
// import Ninja from "./components/ninja";
import React, { Component } from "react";
// import AddNinja from "./components/addNinja";
import NavBar from "./components/navBar";
 ///sert pout les route equivalent a router outlet chez angular 
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./components/HomePage";
import About from "./components/AboutPage";
import Contact from "./components/ContactPage";

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


  ///cpmponent life cycle  , quand le component est monte
  componentDidMount() { 
      console.log('Componet mounted ...');
  }
  //quand le component est update
  componentDidUpdate(prevProps,prevState) { 
    console.log('Component updated ');
    console.log(prevProps, prevState);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          {/* Charge le component Home a la posoition initial */}
          <Route path="/home" component={Home} />
          {/* Ou alors <Route exact path='/' component={Home}/>
          si on voulait utiliser le / uniquement */}
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          {/* <h1>My first react app</h1>
        <p>Welcome to my first app !</p>
        {/* Add the ninja into the array */}
          {/* <AddNinja addNinja={this.addNinja} />
        <br />
        <Ninja
          name="Ndeme Yvan"
          age="25"
          belt="Black"
          ninjas={this.state.ninja}
        /> */}
        </div>
      </BrowserRouter>
    );
  }
}


