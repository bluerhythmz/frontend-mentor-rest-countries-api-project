import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "./Button/Button";
import Loading from "../Loading/Loading";
import {
  ButtonGrid,
  Title,
  Text,
  Main,
  Span,
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
          if (!data.data[0].borders) return;
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
  if (loading) return <Loading />;
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
            <Text>
              Native Name:{" "}
              {country.name.nativeName ? (
                <Span>
                  {Object.values(country.name.nativeName)[0].official}
                </Span>
              ) : (
                <Span>Country doesn't have a native name</Span>
              )}
            </Text>
            <Text>
              Population: <Span>{country.population}</Span>
            </Text>
            <Text>
              Region: <Span>{country.region}</Span>
            </Text>
            <Text>
              Subregion: <Span>{country.subregion}</Span>
            </Text>
            <Text>
              Capitial:{" "}
              <Span>
                {country.capital
                  ? country.capital[0]
                  : "This country doesn't have a capital"}
              </Span>
            </Text>
          </TextWrapperOne>
          <TextWrapperTwo>
            <Text>
              Top level domain:{" "}
              <Span>
                {!country.tld
                  ? "This country doesn't have a top level domain"
                  : country.tld[0]}
              </Span>
            </Text>
            <Text>
              Currencies:
              {country.currencies ? (
                Object.entries(country.currencies).map((currency, index) => (
                  <Span key={index}> {currency[1].name}</Span>
                ))
              ) : (
                <Span>
                  This country doesn't have any currencies
                </Span>
              )}{" "}
            </Text>
            <Text>
              Languages:{" "}
              {country.languages ? (
                Object.values(country.languages).map((language, index) => {
                  if (Object.values(country.languages).length > 1) {
                    return (
                      <Span key={language}>
                        {index === Object.values(country.languages).length - 1
                          ? language
                          : language + ", "}{" "}
                      </Span>
                    );
                  }
                  return <Span key={language}>{language}</Span>;
                })
              ) : (
                <Span>This country doesn't have any languages</Span>
              )}
            </Text>
          </TextWrapperTwo>
          <BorderCountriesWrapper>
            <SubTitle>Border Countries:</SubTitle>
            <ButtonGrid>
              {borderCountryNames.length >= 1 ? (
                <>
                  {borderCountryNames.map((border, index) => (
                    <Button
                      key={index}
                      label={border.data[0].name.common}
                      handleClick={(e) => handleClick(e.target.textContent)}
                    />
                  ))}
                </>
              ) : (
                <Text>No bordering countries</Text>
              )}
            </ButtonGrid>
          </BorderCountriesWrapper>
        </ContentGrid>
      </Section>
    </Main>
  );
};

export default Country;
