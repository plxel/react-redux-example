import PropTypes from 'prop-types'
import React from 'react'
import FlightCard from './FlightCard'

const FlightsGrid = ({ flights, className }) => (
  <ul className={className}>
    {flights.map(f => <li key={f.id}><FlightCard flight={f}/></li>)}
  </ul>
)

FlightsGrid.propTypes = {
  flights: PropTypes.array.isRequired,
  className: PropTypes.string
}

export default FlightsGrid
