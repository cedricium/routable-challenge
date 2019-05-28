import React from 'react'
import PropTypes from 'prop-types'
import './InfoTag.css'

const InfoTag = (props) => {
  return <p className="info-tag">{props.value}</p>
}

InfoTag.propTypes = {
  value: PropTypes.node.isRequired,
}

export default InfoTag
