import React, { Component } from 'react';
import cover from './img/cover.png'
import cover1 from './img/cover1.png'
import logo from './img/logo.png'
import './App.css';

class App extends Component {
 
  loging=(e)=>{
    this.props.history.replace('/home')
  }
  render() {
    
    return (
      <div className="App">
       
        <div>
         <img  className='cover'  src={cover} alt='cover' />
         
           <div className='text' >
              THE HOUSE OF MUSIC.
              <div className='text1' >Play and download music on your mobile, tablet and computer.</div>
           </div>
           <div className= "centerbutton"  >
              <div className='fbButton align space' onClick={this.loging.bind(this)} >Facebook</div>
              <div className='twButton align space' > Twitter</div>
              <p className='text2' >-OR-</p>
              <p className='text3' >Try without: logging in </p>
           </div> 
           <div>
           <img src={logo} className='logo' alt='logo' />
           </div>
        </div>
        <div className='cover1' >
          <img src={cover1} alt='cover' className='cover1' />
        </div>
        
      </div>
    );
  }
}

export default App;
