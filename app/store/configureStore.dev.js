import { createStore } from 'redux'
import rootReducer from '../reducers'
import DevTools from '../containers/DevTools'

export function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    DevTools.instrument()
  )
}
