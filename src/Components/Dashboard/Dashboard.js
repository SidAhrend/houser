import React, { Component } from "react";
import House from "../House/House.js";
import "../Dashboard/Dashboard.css";
import { Link } from "react-router-dom";
import axios from "axios";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      houses: []
    };
    this.getHouses = this.getHouses.bind(this);

  }
  
componentDidMount(){
    this.getHouses();
}

  getHouses() {
    axios
      .get("/api/house")
      .then(res => {
        this.setState({ houses: res.data.house });
      })
      .catch(err => {
        console.log("axios request failed", err);
      });
  }

  render() {
    return (
      <div id="main">
        <div id="dash">
          <div className="sub-header">
            Dashboard
            <Link to="/wizard">
              <button id="add-new">Add New Property</button>
            </Link>
          </div>
          <House/>
        </div>
        
        {this.state.houses.map(house => {
          return (
            <div>
            <House
              id={house.id}
              name={house.name}
              address={house.address}
              city={house.city}
              state={house.state}
              zipcode={house.zipcode}
              deleteHouse={this.deleteHouse}
            />
            </div>
          );
        })}
      </div>
    );
  }
}
export default Dashboard;
