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
  StyledSubArticle
} from "./styles/Country.styled";

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
    const promises = []
    let borders = []
    const url = "https://restcountries.com/v3.1/alpha?codes="
    const fetchCountry = async () => {
      await axios
        .get(`https://restcountries.com/v3.1/name/${params.country}`)
        .then((data) => {
          setCountry(data.data[0]);
          borders = data.data[0].borders;
        }).then(() => {
          for (let i = 0; i < borders.length; i++) {
            promises.push(axios.get(url + borders[i]))
          }
          axios.all(promises).then(axios.spread((...responses) => {
            setBorderCountryNames(responses)
            setLoading(false)
          }))
    })
  }
    fetchCountry()
    
  }, [params.country]);
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
          <StyledSubArticle>
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
          </StyledSubArticle>
          <StyledSubArticle>
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
          </StyledSubArticle>
          <StyledButtonGrid>
            {borderCountryNames.map((border, index) => (
              <Button
                key={index}
                label={border.data[0].name.common}
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
