import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import FlightsGrid from '../components/FlightsGrid'

const FilterableTable = ({ flights, filter, ...props }) => {
  const filtered = filter && flights.filter(f => f.carrier === filter) || flights
  return <FlightsGrid flights={filtered} {...props}/>
}

FilterableTable.propTypes = {
  flights: PropTypes.array.isRequired,
  filter: PropTypes.string
}

const mapStateToProps = (state) => {
  return {
    flights: state.data.flights,
    filter: state.filter
  }
}

export default connect(
  mapStateToProps
)(FilterableTable);
