import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Countries from './components/countries/Countries';
import Country from './components/country/Country';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/:country" element={<Country />} />
      </Routes>
    </div>
  );
}

export default App;
