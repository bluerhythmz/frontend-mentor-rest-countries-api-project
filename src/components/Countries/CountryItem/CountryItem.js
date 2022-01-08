import { useNavigate } from "react-router-dom";
import {
  Wrapper,
  Figure,
  Image,
  Title,
  Text,
  Section,
  Span,
} from "./CountryItem.styled";

const CountryItem = ({ country }) => {
  const { name, flags, population, region, capital } = country
  const navigate = useNavigate();
  const handleClick = (country) => {
    navigate(`/${country}`);
  };
  return (
    <Wrapper onClick={() => handleClick(name.common)}>
      <Figure>
        <Image src={flags.png} />
      </Figure>
      <Section>
        <Title>{name.common}</Title>
        <Text>
          Population: <Span>{population.toLocaleString()}</Span>
        </Text>
        <Text>
          Region: <Span>{region}</Span>
        </Text>
        <Text>
          Capitial: <Span>{capital ? capital[0] : ""}</Span>
        </Text>
      </Section>
    </Wrapper>
  );
};

export default CountryItem;
