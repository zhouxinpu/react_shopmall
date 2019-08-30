import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import {Switch,Route,Redirect} from 'react-router-dom'
import Home from './../Home'
import Category from './../Category'
import Order from './../Order'
import My from './../My'

@connect(null,null)
class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route path="/layout/home" component={Home} />
          <Route path="/layout/category" component={Category} />
          <Route path="/layout/order" component={Order} />
          <Route path="/layout/my" component={My} />
          <Redirect to="/layout/home" />
        </Switch>
      </Fragment>
    )
  }
}

export default Layout