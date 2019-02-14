import * as actionTypes from '../constant/select'

export function change (value) {
  return {
    type: actionTypes.CHANGE,
    value
  }
}

// export function lock (value) {
//   return {
//     type: actionTypes.SELECT_LOCK,
//     value
//   }
// }

// export function s_Private (value) {
//   return {
//     type: actionTypes.SELECT_PRIVATE,
//     value
//   }
// }