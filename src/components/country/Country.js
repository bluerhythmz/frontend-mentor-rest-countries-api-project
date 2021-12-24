import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

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
    <div>
      <div>{country.flag}</div>
      <h1>{country.name.common}</h1>
      <p>
        native name:{" "}
        {Object.entries(country.name.nativeName).map((item, index) => (
          <span key={index}>{item[1].official}</span>
        ))}
      </p>
      <p>population: {country.population}</p>
      <p>region: {country.region}</p>
      <p>subregion: {country.subregion}</p>
      <p>capitial: {country.capital[0]}</p>
      <p>top level domain: {country.tld[0]}</p>
      <p>
        currencies:
        {Object.entries(country.currencies).map((currency, index) => (
          <span key={index}>{currency[1].name}</span>
        ))}{" "}
      </p>
      <p>
        languages:{" "}
        {Object.values(country.languages).map((language, index) => (
          <span key={index}>{language}</span>
        ))}
      </p>
      <div>
        {borderCountryNames.map((name, index) => (
          <button
            key={index}
            onClick={(e) => handleClick(e.target.textContent)}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Country;
