import React from 'react'
import './Button.css'

const PrimaryButton = (props) => {
  return (
    <button className="button primary">
      {props.value}
    </button>
  )
}

export default PrimaryButton
