import React from 'react'
import './Card.css'

function Card({heading, detail}) {
  return (
    <div className="card">
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button">LEARN MORE</button>

    </div>
  )
}

export default Card