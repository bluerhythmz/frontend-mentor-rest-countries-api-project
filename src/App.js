import { Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./GlobalStyles";
import Header from "./components/header/Header";
import Countries from "./components/countries/Countries";
import Country from "./components/country/Country";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/:country" element={<Country />} />
      </Routes>
    </div>
  );
}

export default App;
