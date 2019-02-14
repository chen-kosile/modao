import React, { Component } from 'react'
import down from '../../static/images/down.png'
import up from '../../static/images/up.png'

import './style.css'

export default class Select extends Component {
  constructor() {
    super();
    this.state = {
      value: 'all',
      toggle: false
    }
  }
  componentDidMount() {
    window.addEventListener('click', this.handleClick, false)
  }
  render() {
    return (
      <div id="container">
        <div className="selected" onClick={this.toggle} value={ this.props.value }>
          <span>所有项目组</span>
          {
            this.state.toggle ? <img src={down} alt="下拉"/> : <img src={up} alt="下拉"/>
          }
        </div>
        <div className="outer">
          <ul className="select" onClick={this.handleChange}>
            <li value="all">所有项目组</li>
            <li value="lock">锁定</li>
            <li value="private">私密</li>
          </ul>
        </div>
      </div>
    )
  }
  toggle = (e) => {
    e.stopPropagation();
    const toggle = this.state.toggle;
    let select = document.querySelector('.select');
    if (!toggle) {
      select.style.display = 'block';
    } else {
      select.style.display = 'none';
    }
    this.setState({
      toggle: !toggle
    })
  }
  handleChange = (e) => {
    e.stopPropagation();
    const toggle = this.state.toggle;
    const text = e.target.innerHTML;
    let selected = document.querySelector('.selected span');
    let select = document.querySelector('.select');
    selected.textContent = text;
    select.style.display = 'none';
    this.props.handleChange(e);
    this.setState({
      toggle: !toggle
    })
  }
  handleClick = () => {
    const toggle = this.state.toggle;
    if (toggle) {
      let select = document.querySelector('.select')
      select.style.display = 'none';
      this.setState({
        toggle: !toggle
      })
    }
  }
}
