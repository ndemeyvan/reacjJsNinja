// import logo from "./logo.svg";
import "./App.css";
import Ninja from "./components/ninja";
import React, { Component } from "react";

export default class App extends Component {
  state = {
    ninja: [
      { name: "Ndeme yvan", age: 30, belt: "Black", id: 1 },
      { name: "Akah", age: 25, belt: "Yellow", id: 2 },
      { name: "Olinga", age: 30, belt: "Morray", id: 3 },
    ],
  };

  render() {
    return (
      <div className="App">
        <h1>My first react app</h1>
        <p>Welcome to my first app !</p>
        <Ninja name="Ndeme Yvan " age="25" belt="Black" ninjas={this.state.ninja} />
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
