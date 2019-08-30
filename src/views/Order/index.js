import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Button} from 'antd-mobile'

@connect((state)=>({num:state.user.num}),null)
class Order extends Component {
  render() {
    return (
      <div>
        {this.props.num}
        Order
      </div>
    )
  }
}

export default Order