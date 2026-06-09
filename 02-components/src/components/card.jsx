import React from 'react'
import '../index.css'

const Card = ({ title = 'VICKY SHINDE', subtitle = 'Brief TALLENTED' }) => {
  return (
    <div className="card">
      <h3 className="title">{title}</h3>
      <p className="subtitle">{subtitle}</p>
    </div>
  )
}

export default Card;
