import React, {Component} from 'react';
import genres from './MusicGenres';
import GenresList from './GenresList'
import Player from './../../Player'

import './home.css'

class Home extends Component{
    constructor(props){
        super(props);
        
        
    }
    render(){
        return(
            <div className='home '>
                
                    <div className='header-home'>
                        <ul className='ul' style={{listStyle:'none'}}>
                            <li className='ls1' >Wellcome, Kevin</li>
                            <li>Select genres of your intereset</li>
                        </ul>
                        <div className='' > Skip >> </div>
                        <div className='space' ></div>
                    </div>
                <div className='recomendation'>  
                    {
                    genres.map((genr)=>{
                    return <GenresList musicgenres={genr} key={genr.id} />
                    })
                    }
                </div>
                <Player/>
            </div>
        );
    }
}

export default Home;