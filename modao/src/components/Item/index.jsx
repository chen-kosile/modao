import React, { Component } from 'react'
import Icon from '../../components/Icon'

import './style.css'

export default class Item extends Component {
  render() {
    const data = this.props.data;
    return (
      <div className="item" style={{border: (data.lock ? "2px solid #BABEBF" : '0')}}>
        <div className="left">
          <div className="color" style={{background: `${data.color}`}}></div>
        </div>
        <div className="right">
          <div className="name">{data.name}</div>
          <div className="icon">
            {
              data.private ? <Icon value="锁定"/> : ''
            }
            { 
              data.lock ? <Icon value="私密"/> : ''
            }
          </div>
          <div className="number">{data.number} <span>项目</span></div>
        </div>
      </div>
    )
  }
}
