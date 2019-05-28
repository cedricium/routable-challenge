import React from 'react'
import './InfoGroup.css'

const InfoGroup = (props) => {
  return (
    <div className="invoice-info">
      <p className="info-label">{props.label}</p>
      <div
        style={ props.size === 'large' ? { fontSize: '3.2rem' } : null }
        className="info-value">
          {props.value || props.children}
      </div>
    </div>
  )
}

export default InfoGroup
