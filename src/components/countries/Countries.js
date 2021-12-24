import { useEffect, useState } from "react";
import axios from "axios";
import CountryItem from "./countryItem/CountryItem";
import {
  StyledDiv,
  StyledInput,
  StyledInputWrapper,
  StyledMain,
  StyledSection,
} from "./styles/Countries.styled";
import { BsSearch } from "react-icons/bs";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const initialCountryNames = [
      "germany",
      "united states",
      "brazil",
      "ireland",
      "afghanistan",
      "aland",
      "albania",
      "algeria",
    ];
    const initialCountries = [];

    if (query.length > 1) {
      const fetchQuery = async (query) => {
        setLoading(true);
        await axios
          .get(`https://restcountries.com/v3.1/name/${query}`)
          .then((data) => {
            setCountries(data.data);
          })
          .catch((error) => {
            setError(error);
          })
          .finally(() => setLoading(false));
      };
      fetchQuery(query);
    } else {
      const fetchCountries = async () => {
        for (let i = 0; i < initialCountryNames.length; i++) {
          setLoading(true);
          await axios
            .get(
              `https://restcountries.com/v3.1/name/${initialCountryNames[i]}`
            )
            .then((data) => {
              initialCountries.push(data.data[0]);
            });
        }
        setCountries(initialCountries);
        setLoading(false);
      };
      fetchCountries();
    }
  }, [query]);

  return (
    <StyledMain>
      <StyledInputWrapper>
        <StyledDiv>
          <BsSearch />
        </StyledDiv>
        <StyledInput
          type="text"
          name="search"
          placeholder="Search for a country..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </StyledInputWrapper>

      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>{error.toString()}</h1>
      ) : (
        <StyledSection>
          {countries.map((country, index) => (
            <CountryItem key={index} country={country} />
          ))}
        </StyledSection>
      )}
    </StyledMain>
  );
};

export default Countries;
