import { connect } from 'react-redux'
import { filterTable } from '../actions'
import Picker from '../components/Picker'

const mapStateToProps = (state, props) => {
  return {
    selected: state.filter,
    options: state.data.carriers.map(c => ({ value: c, label: c })),
    placeholder: 'All carriers',
    ...props
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: selected => dispatch(filterTable(selected ? selected.value : ''))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Picker)
