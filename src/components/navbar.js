import React from 'react'

import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <div className={`navbar-navbar navbar-container ${props.rootClassName} `}>
      <div className="navbar-links">
        <label className="navbar-text navbarLink">{props.Text}</label>
        <span className="navbar-text1 navbarLink">{props.Text1}</span>
        <span className="navbar-text2 navbarLink">{props.text}</span>
        <span className="navbar-text3">{props.text1}</span>
        <span className="navbar-text4 navbarLink">{props.text2}</span>
        <button
          type="button"
          className="navbar-frame-button button button-primary"
        >
          <div className="navbar-base">
            <span className="navbar-login componentsbuttonMedium">
              {props.Login}
            </span>
          </div>
        </button>
      </div>
      <div className="max-width">
        <div className="navbar-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar-icon">
            <path
              d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

Navbar.defaultProps = {
  Text1: 'How it works',
  Login: 'Login',
  button: 'Login',
  text2: 'Team',
  Text: 'Philosophy',
  text1: 'Portfolio',
  text: 'Impact Calculator',
  rootClassName: '',
}

Navbar.propTypes = {
  Text1: PropTypes.string,
  Login: PropTypes.string,
  button: PropTypes.string,
  text2: PropTypes.string,
  Text: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Navbar
