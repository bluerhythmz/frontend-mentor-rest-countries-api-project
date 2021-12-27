import React from 'react'
import { StyledButton } from './styles/Button.styled'

const Button = ({ label, handleClick }) => {
  return (
    <StyledButton onClick={handleClick}>
      {label}
    </StyledButton>
  )
}

export default Button
