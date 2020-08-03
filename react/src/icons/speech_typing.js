import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const SpeechTyping = forwardRef(
  ({ color = 'currentColor', size = 21, ...rest }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 21 21"
        fill="none"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...rest}
      >
        <g fill="none" transform="translate(2 4)" fillRule="evenodd">
          <path
            d="m8 13.5172414c4.418278 0 8-3.0259376 8-6.75862071 0-3.73268314-3.581722-6.75862069-8-6.75862069s-8 3.02593755-8 6.75862069c0 1.45741942.5460328 2.80709561 1.47469581 3.91098161l-.97469581 4.5803977 3.91607376-2.4472652c1.07810761.4571647 2.29544433.7145066 3.58392624.7145066z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="m7.99884033 7.75c.5 0 1-.5 1-1s-.5-1-1-1-.99884033.5-.99884033 1 .49884033 1 .99884033 1zm-4 0c.5 0 1-.5 1-1s-.5-1-1-1-.99884033.5-.99884033 1 .49884033 1 .99884033 1zm7.99999997 0c.5 0 1-.5 1-1s-.5-1-1-1-.9988403.5-.9988403 1 .4988403 1 .9988403 1z"
            fill={color}
          ></path>
        </g>
      </svg>
    )
  }
)
SpeechTyping.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
SpeechTyping.displayName = 'SpeechTyping'
export default SpeechTyping
