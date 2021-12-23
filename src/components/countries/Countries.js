import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

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
    const fetchInitialCountries = async () => {
      for (let i = 0; i < initialCountryNames.length; i++) {
        setLoading(true);
        await axios
          .get(`https://restcountries.com/v3.1/name/${initialCountryNames[i]}`)
          .then((data) => {
            initialCountries.push(data.data[0]);
          });
      }
      setLoading(false);
      setCountries(initialCountries);
    };
    fetchInitialCountries();
  }, []);
  if (loading) return <h1>Loading...</h1>;
  return (
    <main>
      <section>
        <input type="text" name="search" />
        {countries.map((country, index) => (
          <Link key={index} to={`/${country.name.common}`} style={{textDecoration: "none"}}>
            <div>{country.flag}</div>
            <h1 >{country.name.common}</h1>
            <p>population: {country.population}</p>
            <p>region: {country.region}</p>
            <p>capitial: {country.capital[0]}</p>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default Countries;
