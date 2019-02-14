import * as actionTypes from '../constant/select';

const initial = {
  value: 'all'
}

export default function select(state=initial, action) {
  switch(action.type) {
    case actionTypes.CHANGE: {
      return {
        value: action.value
      }
    }
    default:
      return state;
  }
}