import './styles/main.scss'

import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Router, Route, browserHistory} from 'react-router'
import Main from './screens/Main'
import store from './store'

const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Main}/>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'))
