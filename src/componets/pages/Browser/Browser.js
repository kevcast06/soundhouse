import React, { Component } from 'react';
import  BrowserList  from "./BrowserList";
import './browser.css'


class Browser extends Component {
    constructor(props){
        super (props)
        this.state={
            search: '',
            videos:[]
        }
    }
    searching=(event)=>{
       const video= this.setState({search:event.target.value})
       const endpoint= `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCQDVpZKhFTcZtj4ZCx7z8jZNmx7j3Krcc&q=${video}&maxResults=2
       `
       fetch(endpoint,{
        method: 'GET',
        headers:
        {
            'Accept': 'application/json',
        },
    }).then(data=> data.json())
    .then(gotvideo=>{
      
    this.setState({videos: gotvideo.items})
    console.log('items', this.state.videos);
    
     
     ;})
        
    }
    render(){
    
        
        const video_info=this.state.videos
        console.log('Que pasa aca?', video_info);
        
        return(
           <div className='browser ' >
             <div className='header'>
                <p> The killer Radio </p>
             </div>
             <div className='direction '>
                     <p>Show all</p>
                   <p>Solo Audio</p>
                   <p>Solo Lyric</p> 
                   <div className='div'> 
                       <input className= 'search-music' placeholder='Search' onChange={this.searching.bind(this)} ></input> 
                     </div>
                     <div className='empty'></div>
             </div>
            
            { video_info.map((vid, index)=>{
                return <BrowserList items={vid} key={vid[index]}/>
            })}
            
             
            
             
           </div>
        );
    }

}
export default Browser