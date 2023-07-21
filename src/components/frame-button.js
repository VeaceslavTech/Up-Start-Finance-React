import React from 'react'

import PropTypes from 'prop-types'

import './frame-button.css'

const FrameButton = (props) => {
  return (
    <div className="frame-button-container">
      <button
        type="button"
        className="frame-button-frame-button button button-primary"
      >
        <div className="frame-button-base">
          <span className="frame-button-text componentsbuttonMedium">
            {props.buttonText}
          </span>
        </div>
      </button>
    </div>
  )
}

FrameButton.defaultProps = {
  buttonText: 'Whitepaper',
}

FrameButton.propTypes = {
  buttonText: PropTypes.string,
}

export default FrameButton
