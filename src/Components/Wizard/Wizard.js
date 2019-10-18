import React, { Component } from "react";
import '../Wizard/Wizard.css';
import {Link} from 'react-router-dom';
import House from '../House/House';

class Wizard extends Component {
    constructor(props){
        super(props);
        this.state ={
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''
        }
    }
    handleInputName = e => {
        this.setState({
        name: e.target.value,
        });
      };
      handleInputAddress = e => {
        this.setState({
        address: e.target.value,
        });
      };
      handleInputCity = e => {
        this.setState({
        city: e.target.value,
        });
      };
      handleInputState = e => {
        this.setState({
        state: e.target.value,
        });
      };
      handleInputZipcode = e => {
        this.setState({
        zipcode: e.target.value,
        });
      };

  render() {
      console.log(this.state)
    return (
      <div className='main'>
        <div className="wiz-sub-header">
            add new listing
        <Link to ='/' >
        <button id='cancel'> cancel </button>
        </Link>
        </div>
        <div className="form">
            Name: 
            <input 
            ref = 'name'
            placeholder='name'
            onChange={e => this.handleInputName(e)}
            />
            <br/>
            Address: 
            <input 
            ref = 'address'
            placeholder='address'
            onChange={e => this.handleInputAddress(e)}
            />
            <br/>
            City:
            <input 
            ref = 'city'
            placeholder='city'
            onChange={e => this.handleInputCity(e)}
            />
            <br/>
            State:
            <input 
            ref = 'state'
            placeholder='state'
            onChange={e => this.handleInputState(e)}
            />
            <br/>
            Zipcode:
            <input 
            ref = 'zipcode'
            placeholder='zipcode'
            onChange={e => this.handleInputZipcode(e)}
            />
        </div>
      </div>
    );
  }
}
export default Wizard;
