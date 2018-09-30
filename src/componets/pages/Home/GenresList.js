import React, {Component} from 'react';

import './genres.css'

class GenresList extends Component{
   
    render(){
        const genres=this.props.musicgenres;
       
        
        return(
           <div className='flexdirection' style={ { backgroundImage: "url("+genres.image+")", height:85, backgroundRepeat:'no-repeat' }  } >
            
               
               <p className='genres' >{genres.name} </p>
            
          
           </div>
        
        );
    }
}

export default GenresList;