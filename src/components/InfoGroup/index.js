import React from 'react'
import PropTypes from 'prop-types'
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

InfoGroup.propTypes = {
  label: PropTypes.string.isRequired,
  value: function(props, propName, componentName) {
    if (!props.value && !props.children) {
      return new Error(
        'The prop `' + propName + '` is required in ' + componentName +
        ' unless prop `children` is otherwise supplied. Validation failed.'
      )
    }
  },
}

export default InfoGroup
