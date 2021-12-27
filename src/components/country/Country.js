import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "./Button/Button";
import {
  StyledButtonGrid,
  StyledH1,
  StyledP,
  StyledMain,
  StyledSpan,
} from "./styles/Country.styled";

const Country = () => {
  const [country, setCountry] = useState({});
  const [borderCountries, setBorderCountries] = useState([]);
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
    const fetchCountry = async () => {
      await axios
        .get(`https://restcountries.com/v3.1/name/${params.country}`)
        .then((data) => {
          setCountry(data.data[0]);
          setBorderCountries(data.data[0].borders);
          setLoading(false);
        });
    };
    fetchCountry();
    const fetchBorderCountries = async () => {
      const countryNames = [];

      for (let i = 0; i < borderCountries.length; i++) {
        await axios
          .get(
            `https://restcountries.com/v3.1/alpha?codes=${borderCountries[i]}`
          )
          .then((data) => {
            countryNames.push(data.data[0].name.common);
          });
      }
      setBorderCountryNames(countryNames);
    };
    fetchBorderCountries();
  }, [params.country, borderCountries]);
  if (loading) return <h1>Loading...</h1>;
  return (
    <StyledMain>
      <Button label="Back" handleClick={goBack} />
      <section>
        <figure>
          <img src={country.flags.png} alt="country_flag" />
        </figure>
        <article>
          <StyledH1>{country.name.common}</StyledH1>
          <article>
            <StyledP>
              Native Name:{" "}
              {Object.entries(country.name.nativeName).map((item, index) => (
                <StyledSpan key={index}>{item[1].official}</StyledSpan>
              ))}
            </StyledP>
            <StyledP>
              Population: <StyledSpan>{country.population}</StyledSpan>
            </StyledP>
            <StyledP>
              Region: <StyledSpan>{country.region}</StyledSpan>
            </StyledP>
            <StyledP>
              Subregion: <StyledSpan>{country.subregion}</StyledSpan>
            </StyledP>
            <StyledP>
              Capitial: <StyledSpan>{country.capital[0]}</StyledSpan>
            </StyledP>
          </article>
          <article>
            <StyledP>
              Top level domain: <StyledSpan>{country.tld[0]}</StyledSpan>
            </StyledP>
            <StyledP>
              Currencies:
              {Object.entries(country.currencies).map((currency, index) => (
                <StyledSpan key={index}>{currency[1].name}</StyledSpan>
              ))}{" "}
            </StyledP>
            <StyledP>
              Languages:{" "}
              {Object.values(country.languages).map((language, index) => (
                <StyledSpan key={index}>{language}</StyledSpan>
              ))}
            </StyledP>
          </article>
          <StyledButtonGrid>
            {borderCountryNames.map((name, index) => (
              <Button
                key={index}
                label={name}
                handleClick={(e) => handleClick(e.target.textContent)}
              />
            ))}
          </StyledButtonGrid>
        </article>
      </section>
    </StyledMain>
  );
};

export default Country;
