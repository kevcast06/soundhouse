import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationMenu from './componets/NavigationMenu'
import App from './App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <div> 
         <Route path='/home'  component={NavigationMenu} />
         
          <Route exact path="/"  component={App} />
        
        </div>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();