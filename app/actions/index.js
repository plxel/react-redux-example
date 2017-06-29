import * as types from './types'

export function filterTable(filter) {
  return {
    type: types.FILTER_BY_CARRIER,
    filter
  }
}
