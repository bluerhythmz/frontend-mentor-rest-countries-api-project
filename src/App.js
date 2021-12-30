import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { GlobalStyles } from "./GlobalStyles";
import Header from "./components/header/Header";
import Countries from "./components/countries/Countries";
import Country from "./components/country/Country";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Themes";

function App() {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark")
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <div>
        <GlobalStyles />
        <Header handleClick={toggleTheme}/>
        <Routes>
          <Route  path="/" element={<Countries />} />
          <Route path="/:country" element={<Country />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
