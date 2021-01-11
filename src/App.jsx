// import logo from "./logo.svg";
import "./App.css";
import Ninja from "./components/ninja";
import React, { Component } from "react";
// import AddNinja from "./components/addNinja";
import NavBar from "./components/navBar";
 ///sert pout les route equivalent a router outlet chez angular 
// import { BrowserRouter } from "react-router-dom";

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
      <div className="App">
        <NavBar/>
        
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
    );
  }
}

// function App() {

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           click here to learn react
//         </a>

//         <SecondComponent/>

//       </header>
//     </div>
//   );
// }
