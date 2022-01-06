import { StyledH1, StyledHeader, ThemeToggle, Span } from "./Header.styled";
import { useNavigate } from "react-router-dom";

const Header = ({ handleClick }) => {
  const navigate = useNavigate()
  const goHome = () => navigate('/')
  return (
    <StyledHeader>
      <StyledH1 onClick={goHome}>Where in the world?</StyledH1>
      <ThemeToggle onClick={handleClick}>
        <ion-icon name="moon"></ion-icon>
        <Span>Dark Mode</Span>
      </ThemeToggle>
    </StyledHeader>
  );
};

export default Header;
