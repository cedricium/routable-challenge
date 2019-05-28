import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

const PrimaryButton = (props) => {
  return (
    <button className="button primary">
      {props.value}
    </button>
  )
}

PrimaryButton.propTypes = {
  value: PropTypes.node.isRequired,
}

export default PrimaryButton
