import React, { Component } from 'react'

import './style.css'

export default class Icon extends Component {
  render() {
    return (
      <div>
        <div className="icon-item">{this.props.value}</div>
      </div>
    )
  }
}
