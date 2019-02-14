import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore } from 'redux'

import rootReducer from './reducers'

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, composeWithDevTools());
  return store;
}
