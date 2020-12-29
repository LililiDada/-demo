import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom'
import {pages} from './util'
ReactDOM.render(
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        {
          pages.map(item => {
            return <Route path={item.path} exact component={item.component} key={item.path}/>
          })
        }
        </Switch>
    </Router>,
  document.getElementById('root')
);

