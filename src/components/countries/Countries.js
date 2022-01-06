import { useEffect, useState } from "react";
import axios from "axios";
import CountryItem from "./countryItem/CountryItem";
import {
  StyledDiv,
  StyledInput,
  StyledInputWrapper,
  StyledInputsContainer,
  StyledMain,
  StyledSection,
  StyledImage,
} from "./styles/Countries.styled";
import { BsSearch } from "react-icons/bs";
import Filter from "../Filter/Filter";
import Search from "../../assets/search-outline.svg";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState("Filter by Region");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fetchCountries = async () => {
        setLoading(true);
        await axios.get(`https://restcountries.com/v3.1/all`).then((data) => {
          //fix: Aland Islands to be sorted with "A" names
          const sortedCountries = data.data.sort((a, b) =>
            a.name.common < b.name.common ? -1 : 1
          );
          const filteredCountries = sortedCountries.filter((country) =>
            country.name.common.toLowerCase().includes(query.toLowerCase())
          );
          const filteredByRegion = filteredCountries.filter((country) => {
            if (region !== "Filter by Region") {
              return country.region === region;
            }
            return country;
          });

          if (filteredCountries.length === 0) {
            setError("No items match this query");
            setLoading(false);
          } else {
            setCountries(filteredByRegion);
            setError("");
            setLoading(false);
          }
        });
      };
      fetchCountries();
    }, 400);
    return () => clearTimeout(timeout);
  }, [query, region]);

  const handleSelect = (value) => {
    setRegion(value);
  };

  return (
    <StyledMain>
      <StyledInputsContainer>
        <StyledInputWrapper>
          <StyledDiv>
            <ion-icon name="search-outline"></ion-icon>
          </StyledDiv>
          <StyledInput
            type="text"
            name="search"
            placeholder="Search for a country..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </StyledInputWrapper>
        <Filter handleSelect={handleSelect} region={region} />
      </StyledInputsContainer>
      <StyledSection>
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>{error.toString()}</h1>
        ) : (
          <>
            {countries.map((country, index) => (
              <CountryItem key={index} country={country} />
            ))}
          </>
        )}
      </StyledSection>
    </StyledMain>
  );
};

export default Countries;
