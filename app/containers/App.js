import React from 'react'
import Picker from './Picker'
import FilterableFlights from './FilterableFlights'
import '../styles/app.scss'
export default function App() {
  return (
    <section className="flights">
      <h2 className="flights__headline">Flights</h2>
      <div>
        <Picker className="flights__picker"/>
      </div>
      <FilterableFlights className="flights__grid"/>
    </section>
  )
}
