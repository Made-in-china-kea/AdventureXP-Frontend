import React from 'react'
import '../assets/styles/components/Button.css'
import { Link } from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--outline', 'btn--test']

const SIZES = ['btn--medium', 'btn--large']

interface ButtonProps {
  children: React.ReactNode
  type: 'button' | 'submit' | 'reset'
  onClick: () => void
  buttonStyle: string
  buttonSize: string
}

export const Button = (props: ButtonProps) => {
  const checkButtonStyle = STYLES.includes(props.buttonStyle)
    ? props.buttonStyle
    : STYLES[0]

  const checkButtonSize = SIZES.includes(props.buttonSize)
    ? props.buttonSize
    : SIZES[0]

  return (
    <Link to="/reservation" className="btn-mobile">
      <button
        className={`btns ${checkButtonStyle} ${checkButtonSize}`}
        onClick={props.onClick}
        type={props.type}
      >
        {props.children}
      </button>
    </Link>
  )
}
