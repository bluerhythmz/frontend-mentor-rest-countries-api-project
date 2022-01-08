import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { GlobalStyles } from "./GlobalStyles";
import Header from "./components/Header/Header";
import Countries from "./components/Countries/Countries";
import Country from "./components/Country/Country";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Themes";

function App() {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark")
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Header handleClick={toggleTheme}/>
        <Routes>
          <Route  path="/" element={<Countries />} />
          <Route path="/:country" element={<Country />} />
        </Routes>
    </ThemeProvider>
  );
}

export default App;
