import React from 'react'
import {render} from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'

import App from './screens/root'

const router = (
  <Router history={browserHistory}>
    <Route path='/' component={App}/>
  </Router>
)

render(router, document.getElementById('root'))
