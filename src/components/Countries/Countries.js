import { useEffect, useState } from "react";
import axios from "axios";
import CountryItem from "./CountryItem/CountryItem";
import {
  Figure,
  TextInput,
  InputWrapper,
  InputsContainer,
  Wrapper,
  Section,
  Text,
} from "./Countries.styled";
import Filter from "./Filter/Filter";
import Loading from "../Loading/Loading";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState("All");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      
        setLoading(true);
        axios.get(`https://restcountries.com/v3.1/all`).then((data) => {
          //fix: Aland Islands to be sorted with "A" names
          const sortedCountries = data.data.sort((a, b) =>
            a.name.common < b.name.common ? -1 : 1
          );
          const filteredCountriesByQuery = sortedCountries.filter((country) =>
            country.name.common.toLowerCase().includes(query.toLowerCase())
          );
          const filteredCountriesByRegion = filteredCountriesByQuery.filter((country) => {
            if (region !== "All") {
              return country.region === region;
            }
            return country;
          });

          if (filteredCountriesByQuery.length === 0) {
            setError("No items match this query");
            setLoading(false);
          } else {
            setCountries(filteredCountriesByRegion);
            setError("");
            setLoading(false);
          }
        });
      
    }, 400);
    return () => clearTimeout(timeout);
  }, [query, region]);

  return (
    <Wrapper>
      <InputsContainer>
        <InputWrapper>
          <Figure>
            <ion-icon name="search-outline"></ion-icon>
          </Figure>
          <TextInput
            type="text"
            name="search"
            placeholder="Search for a country..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </InputWrapper>
        <Filter region={region} setRegion={setRegion} />
      </InputsContainer>
      <Section>
        {loading ? (
          <Loading />
        ) : error ? (
          <Text>{error.toString()}</Text>
        ) : (
          <>
            {countries.map((country, index) => (
              <CountryItem key={index} country={country} />
            ))}
          </>
        )}
      </Section>
    </Wrapper>
  );
};

export default Countries;
