import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Button} from 'antd-mobile'

@connect(null,null)
class Product extends Component {
  render() {
    return (
      <div>
        Product
      </div>
    )
  }
}

export default Product