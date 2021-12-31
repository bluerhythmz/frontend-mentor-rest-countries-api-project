import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "./Button/Button";
import {
  StyledButtonGrid,
  Title,
  P,
  Main,
  StyledSpan,
  FIgure,
  ContentGrid,
  SubTitle,
  Image,
  Section,
  TextWrapperOne,
  TextWrapperTwo,
  BorderCountriesWrapper,
} from "./Country.styled";

const Country = () => {
  const [country, setCountry] = useState({});
  const [borderCountryNames, setBorderCountryNames] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const navigate = useNavigate();

  const handleClick = (country) => {
    navigate(`/${country}`);
  };

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const promises = [];
    let borders = [];
    const url = "https://restcountries.com/v3.1/alpha?codes=";
    const fetchCountry = async () => {
      await axios
        .get(`https://restcountries.com/v3.1/name/${params.country}`)
        .then((data) => {
          setCountry(data.data[0]);
          borders = data.data[0].borders;
        })
        .then(() => {
          for (let i = 0; i < borders.length; i++) {
            promises.push(axios.get(url + borders[i]));
          }
          axios.all(promises).then(
            axios.spread((...responses) => {
              setBorderCountryNames(responses);
              setLoading(false);
            })
          );
        });
    };
    fetchCountry();
  }, [params.country]);
  if (loading) return <h1>Loading...</h1>;
  return (
    <Main>
      <Button label="Back" handleClick={goBack} />
      <Section>
        <FIgure>
          <Image src={country.flags.png} alt="country_flag" />
        </FIgure>
        <ContentGrid>
          <Title>{country.name.common}</Title>
          <TextWrapperOne>
            <P>
              Native Name:{" "}
              {Object.entries(country.name.nativeName).map((item, index) => {
                if (index === 0) {
                  return <StyledSpan key={index}>{item[1].common}</StyledSpan>;
                }
              })}
            </P>
            <P>
              Population: <StyledSpan>{country.population}</StyledSpan>
            </P>
            <P>
              Region: <StyledSpan>{country.region}</StyledSpan>
            </P>
            <P>
              Subregion: <StyledSpan>{country.subregion}</StyledSpan>
            </P>
            <P>
              Capitial: <StyledSpan>{country.capital[0]}</StyledSpan>
            </P>
          </TextWrapperOne>
          <TextWrapperTwo>
            <P>
              Top level domain: <StyledSpan>{country.tld[0]}</StyledSpan>
            </P>
            <P>
              Currencies:
              {Object.entries(country.currencies).map((currency, index) => (
                <StyledSpan key={index}> {currency[1].name}</StyledSpan>
              ))}{" "}
            </P>
            <P>
              Languages:{" "}
              {Object.values(country.languages).map((language, index) => (
                <StyledSpan key={index}>{language}</StyledSpan>
              ))}
            </P>
          </TextWrapperTwo>
          <BorderCountriesWrapper>
            <SubTitle>Border Countries:</SubTitle>
            <StyledButtonGrid>
              {borderCountryNames.map((border, index) => (
                <Button
                  key={index}
                  label={border.data[0].name.common}
                  handleClick={(e) => handleClick(e.target.textContent)}
                />
              ))}
            </StyledButtonGrid>
          </BorderCountriesWrapper>
        </ContentGrid>
      </Section>
    </Main>
  );
};

export default Country;
