import React from 'react'
import PropTypes from 'prop-types'
import './NavigationBar.css'
import googleLogo from '../../assets/google-logo.png'

const Logo = (props) => {
  const { src, alt } = props
  return <img className="logo" src={src} alt={alt} />
}

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-left">
          <Logo src={googleLogo} alt="Google" />
        </div>
        <div className="nav-right">
          <a className="nav-item" href="#dashboard">Dashboard</a>
          <a className="nav-item" href="#invoices">Invoices</a>
          <a className="nav-item" href="#settings">Settings</a>
          <div className="nav-item avatar">
            <img className=""
              src="https://randomuser.me/api/portraits/men/4.jpg"
              alt="James Lee"
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default NavigationBar
