import React, {Component} from 'react';
import './App.css';
import Main from './components/Main'
import Login from './components/Login'
import SignUpForm from './components/SignUpForm'
import GroupContainer from './components/GroupContainer'
import Navbar from './components/Navbar/Navbar'
require ('dotenv').config()
interface IAppState {
  latitude: null | number;
  longitude: null | number;
  userAddress: any,
  isLoggedin: boolean

}



export default class App extends Component<{},IAppState> {

  constructor(props:{}) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      userAddress: null,
      isLoggedin: false
    };
    this.getLocation = this.getLocation.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this);
    this.getUserAddress = this.getUserAddress.bind(this);
  }

  getLocation() {
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleLocationErrors);
    } 
    else {
    alert("Geolocation is not supported by this browser.")
    }
  }

  getUserAddress (){
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&key=${process.env.GOOGLE_API_KEY}`)
    .then(response => response.json())
    .then(data => this.setState({
      userAddress: data.results[0].formatted_address
    }))
    .catch(error => alert(error))
  }

  getCoordinates(position: any) {
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    })
    this.getUserAddress()
  }

  handleLocationErrors(error: any){

  switch(error.code) {
    case error.PERMISSION_DENIED:
      alert("User denied the request for Geolocation.")
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Location information is unavailable.")
      break;
    case error.TIMEOUT:
      alert("The request to get user location timed out.")
      break;
    case error.UNKNOWN_ERROR:
      alert("An unknown error occurred.")
      break;
    default:
    alert("An unknown error occurred.")
    }
  }
  
  handleLogin = () => this.setState({
    isLoggedin: true
  });
  handleLogout = () => this.setState({
    isLoggedin:false
  }) 

  render() {
    return (
      <div className = "app">
        <h1>Lost</h1>
        { this.state.isLoggedin ? <Navbar/> : null }
        
        <div className="signup-login">
        <SignUpForm />
        <Login 
          
          handleLogout = {this.handleLogout}
          handleLogin = {this.handleLogin}
          /> 
        </div>
        <img className = "wallpaper"src = "https://wallpaperaccess.com/full/1900092.jpg"/>
        {this.state.isLoggedin ? 
        <GroupContainer 
        /> : null}
        {this.state.isLoggedin ? 
        <Main className="main"
        latitude = {this.state.latitude}
        longitude = {this.state.longitude}
        userAddress = {this.state.userAddress}
        getCoordinates = {this.getCoordinates}
        getLocation = {this.getLocation}
        getUserAddress = {this.getUserAddress}
        /> : null }
      </div>
    )
  }
}
