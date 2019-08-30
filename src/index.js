import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import '@/assets/less/reset.less'
import '@/assets/iconfont/iconfont.css'
import { Provider } from 'react-redux'
import store from './store'
import Register from './views/Register'
import Layout from './views/Layout'
import Login from './views/Login'
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route component={Layout} />
        <Redirect to="/login" />
      </Switch>
    </Router>
  </Provider>, document.querySelector('#root'))