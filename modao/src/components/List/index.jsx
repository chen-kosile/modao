import React, { Component } from 'react'
import Item from '../../components/Item'

import add from '../../static/images/add.png';
import './style.css'

export default class List extends Component {
  render() {
    return (
      <div className="show">
        {
          this.props.datas.map((data, index) => (
            <Item data={data} key={index}></Item>
          ))
        }
        <div className="add item" onClick={ this.props.handleAdd }>
            <img src={ add } alt="添加"/>
            <p>新建项目组</p>
        </div>
      </div>
    )
  }
}
