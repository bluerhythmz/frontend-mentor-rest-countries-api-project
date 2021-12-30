import { StyledH1, StyledHeader } from "./Header.styled"

const Header = ({ handleClick }) => {
  
  return (
    <StyledHeader>
      <StyledH1>Where in the world?</StyledH1>
      <button onClick={handleClick}>Dark Mode</button>
    </StyledHeader>
  )
}

export default Header
