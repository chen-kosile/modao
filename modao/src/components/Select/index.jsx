import React, { Component } from 'react'

import './style.css'

export default class Select extends Component {
  render() {
    return (
      <div className="select">
        <select value={ this.props.value } onChange={ this.props.handleChange } >
          <option value="all">所有项目组</option>
          <option value="lock">锁定</option>
          <option value="private">私密</option>
        </select>
      </div>
    )
  }
}
