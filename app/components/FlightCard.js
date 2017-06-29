import PropTypes from 'prop-types'
import React from 'react'

const formatTime = (date) => date.getHours() + ':' + date.getMinutes()

const formatDate = (date) => (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear()

const formatDateTime = (dateStr) => {
  const dateTime = new Date(dateStr)
  return {
    date: formatDate(dateTime),
    time: formatTime(dateTime)
  }
}

const FlightCard = ({ flight }) => {
  const dateTimeFrom = formatDateTime(flight.departure)
  const dateTimeTo = formatDateTime(flight.arrival)
  return (
    <section className="flight-card">
      <div className="flight-card__carrier">
        {flight.carrier}
      </div>
      <div className="flight-card__direction">
        {flight.direction.from} - {flight.direction.to}
      </div>
      <div className="flight-card__time">
        <div className="flight-card__time--from">
          <div>{dateTimeFrom.time}</div>
          <div>{dateTimeFrom.date}</div>
        </div>
        <div className="flight-card__time--separator">
          <svg viewBox="0 0 1000 1000"><path d="M694.4 242.4l249.1 249.1c11 11 11 21 0 32L694.4 772.7c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210.1-210.1H67.1c-13 0-23-10-23-23s10-23 23-23h805.4L662.4 274.5c-21-21.1 11-53.1 32-32.1z"></path></svg>
        </div>
        <div className="flight-card__time--to">
          <div>{dateTimeTo.time}</div>
          <div>{dateTimeTo.date}</div>
        </div>
      </div>
    </section>
)}

FlightCard.propTypes = {
  flight: PropTypes.object.isRequired
}

export default FlightCard
