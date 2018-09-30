import React, {Component} from 'react';
import './browser.css'
import cover from './../../../img/coverdisc.png'
class BrowserList extends Component{
    constructor(props){
        super(props)
       
    }
    render(){
        const videoinfo= this.props.items
        console.log('informacion', videoinfo);
        
        return(
            <div className='content'>
            
                <div className='direction'>
                    <img src={cover} alt='cover' />
                    <p><i class="far fa-heart"></i></p>
                    <p><i class="fas fa-ellipsis-v"></i></p> 
                    <p>{videoinfo.id.videoId}</p>
                    <p>Artista</p>
                    <p>duración</p>
                    <div className='empty'></div>
                </div>
            
            </div >
        );
    }
} 

export default BrowserList