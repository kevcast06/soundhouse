import React, { Component } from 'react';

import {  Input } from 'reactstrap';
import './menu.css'
import logo1 from './../img/logo1.png'
import Home from './pages/Home/Home'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Browser from './pages/Browser/Browser';
class NavigationMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
          pressed: "",
          bowser:""
        }
      }
    changeStyle=()=>{
        
        
        this.setState({
            pressed:'black'
        })
        
    }
    browser=()=>{
       
        this.props.history.replace('/browser')
                        
       
        
    }
     
    
    render(){
       

        return(
           <Router>
            <div className='main' >
             <div className='menubar'>
                <img src={logo1} alt='logo' className='logo1'/>
                
                 <Input  className='search' placeholder='Search' > </Input>
                 <div className='menu' >
                 <div className='HBclass'>
                     <Link to='home'><p style={{backgroundColor:this.state.pressed}} onClick={this.changeStyle.bind(this)} >Home</p></Link>
                     <Link to='browser'><p>Browser  </p></Link>
                 </div>
                 <div className='infomusic' >
                     <p>Your music</p>
                     <p>My Songs</p>
                     <p>Artist</p>
                     <p>Playlists</p>
                     <p>+ Create a playlist</p>
                 </div>
                </div>
            
             </div>
            
             <Route exact path='/home' render={(props) => (
              <Home {...props}  />
            )}/>
            
             <Route  path='/browser' render={(props) => (
              <Browser {...props}  />
            )}/>
                
           </div>
            
           </Router>
        );
    }

}
export default NavigationMenu