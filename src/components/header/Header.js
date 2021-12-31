import { StyledH1, StyledHeader, ThemeToggle, Span } from "./Header.styled";

const Header = ({ handleClick }) => {
  return (
    <StyledHeader>
      <StyledH1>Where in the world?</StyledH1>
      <ThemeToggle onClick={handleClick}>
        <ion-icon name="moon"></ion-icon>
        <Span>Dark Mode</Span>
        
      </ThemeToggle>
    </StyledHeader>
  );
};

export default Header;
