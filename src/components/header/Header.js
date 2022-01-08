import { Title, Wrapper, ThemeToggle, Span } from "./Header.styled";
import { useNavigate } from "react-router-dom";

const Header = ({ handleClick }) => {
  const navigate = useNavigate();
  const goHome = () => navigate("/");
  return (
    <Wrapper>
      <Title onClick={goHome}>Where in the world?</Title>
      <ThemeToggle onClick={handleClick}>
        <ion-icon name="moon"></ion-icon>
        <Span>Dark Mode</Span>
      </ThemeToggle>
    </Wrapper>
  );
};

export default Header;
