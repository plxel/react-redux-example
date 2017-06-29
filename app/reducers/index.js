import { combineReducers } from 'redux'
import * as types from '../actions/types'

const filter = (state = '', action) => {
  switch (action.type) {
    case types.FILTER_BY_CARRIER:
      return action.filter
    default:
      return state
  }
}

const defaultDataState = {
  flights: [],
  carriers: []
}

const data = (state = defaultDataState) => state


const rootReducer = combineReducers({
  data,
  filter
})

export default rootReducer
