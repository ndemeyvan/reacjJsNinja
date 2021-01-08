import React, { Component } from "react";

export default class Ninja extends Component {
  render() {
    const { name,age , belt } = this.props;
    return (
      <div className="ninja">
        <div>Name : { name }</div>
        <div>Age : {age}</div>
        <div>Belt : {belt}</div>
      </div>
    );
  }
}


