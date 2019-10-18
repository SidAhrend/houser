import React, { Component } from "react";
import "../House/House.css";
// import Wizard from '../Wizard/Wizard';

class House extends Component {
  render() {
    return (
      <div id="house">
          Name: {this.props.name}
          <br/>
          Address:
          <br/>
          City:
          <br/>
          State: 
          <br/>
          Zip: 
        <button> delete </button>
      </div>
    );
  }
}
export default House;
