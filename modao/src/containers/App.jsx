import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import Select from '../components/Select';
import List from '../components/List';
import { data } from '../data/data';
import * as selectActions from '../store/actions/select'

import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      datas: data
    }
  }
  render() {
    const value = this.props.select.value;
    return (
      <div className="App">
        <Select value={ value } handleChange={ this.handleChange }/>
        <List value={ value } datas={ this.state.datas } handleAdd={ this.handleAdd }/>
      </div>
    )
  }
  handleChange = (event) => {
    const value = event.target.value;
    const selectActions = this.props.selectActions;

    let datas = data;
    datas = this.judge(value, datas);
    selectActions.change(value);
    this.setState({
      datas
    });
  }
  judge = (value, datas) => {
    if (value === "lock") {
      datas = datas.filter((item) => {
        return item.lock;
      })
    } else if (value === "private") {
      datas = datas.filter((item) => {
        return item.private;
      })
    }
    return datas
  }
  handleAdd = () => {
    let datas = data;
    const item = {
      id: 5,
      name: "测试",
      color: "red",
      private: true,
      lock: true,
      number: 4,
    }
    datas.push(item);
    this.setState({
      datas
    });
  }
}

function mapStateToProps (state) {
  return {
    select: state.select
  }
}

// function mapDispatchToProps (dispatch) {
//   return {
//     select: (value) => {
//       dispatch(selectActions.change(value))
//     }
//   }
// }

function mapDispatchToProps (dispatch) {
  return {
    selectActions: bindActionCreators(selectActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);


