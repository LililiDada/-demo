import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter, Route } from 'react-router-dom'
import { pages } from './util'
ReactDOM.render(
    <HashRouter>
      <Route path="/" component={App}>
        {
          pages.length && pages.map(item => {
            return <Route path={item.path} component={item.component} />
          })
        }
      </Route> 
    </HashRouter>,
  document.getElementById('root')
);

