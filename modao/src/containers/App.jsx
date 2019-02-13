import React, { Component } from 'react'
import Select from '../components/Select';
import List from '../components/List';
import { data } from '../data/data';

import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: 'all',
      datas: data
    }
  }
  render() {
    return (
      <div className="App">
        <Select value={this.state.value} handleChange={ this.handleChange }/>
        <List value={ this.state.value } datas={ this.state.datas } handleAdd={ this.handleAdd }/>
      </div>
    )
  }
  handleChange = (event) => {
    const value = event.target.value;
    let datas = data;
    if (value === "lock") {
      datas = datas.filter((item) => {
        return item.lock === true;
      })
    } else if (value === "private") {
      datas = datas.filter((item) => {
        return item.private === true;
      })
    }
    this.setState({
      value: event.target.value,
      datas
    })
  }
  handleAdd = () => {
    let datas = data;
    const item = {
      id: 5,
      name: "测试",
      color: "red",
      private: false,
      lock: false,
      number: 4,
    }
    datas.push(item);
    this.setState({
      datas
    })
  }
}

export default App;


