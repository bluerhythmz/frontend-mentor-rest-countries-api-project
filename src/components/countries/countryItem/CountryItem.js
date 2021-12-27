import { useNavigate } from "react-router-dom";
import {
  StyledArticle,
  StyledDiv,
  StyledFlag,
  StyledH2,
  StyledP,
  StyledSection,
  StyledSpan,
} from "./styles/CountryItem.styled";

const CountryItem = ({ country }) => {
  const navigate = useNavigate();
  const handleClick = (country) => {
    navigate(`/${country}`);
  };
  return (
    <StyledArticle onClick={() => handleClick(country.name.common)}>
      <StyledDiv>
        <StyledFlag src={country.flags.png} />
      </StyledDiv>
      <StyledSection>
        <StyledH2>{country.name.common}</StyledH2>
        <StyledP>
          Population: <StyledSpan>{country.population.toLocaleString()}</StyledSpan>
        </StyledP>
        <StyledP>
          Region: <StyledSpan>{country.region}</StyledSpan>
        </StyledP>
        <StyledP>
          Capitial: <StyledSpan>{country.capital ? country.capital[0] : ""}</StyledSpan>
        </StyledP>
      </StyledSection>
    </StyledArticle>
  );
};

export default CountryItem;
