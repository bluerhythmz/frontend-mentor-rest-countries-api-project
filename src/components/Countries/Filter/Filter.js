import { useState, useRef, useEffect } from "react";
import {
  Button,
  Container,
  Div,
  Option,
  Options,
  Span,
} from "./Filter.styled";

const Filter = ({ region, setRegion }) => {
  const [open, setOpen] = useState(false);
  const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];
  const filterRef = useRef()
  
  const handleFilterClick = () => {
    setOpen(!open);
  };

  const handleSelectOption = (value) => {
    setRegion(value);
    setOpen(false)
  };

  useEffect(() => {
    document.addEventListener('click', (e) => {
      if (filterRef.current == null || filterRef.current.contains(e.target)) return
        if (open) {
          setOpen(false)
        }
      
    })
  })

  return (
    <Container ref={filterRef}>
      <Button onClick={handleFilterClick}>
        <Span>{region === "All" ? "Filter by Region" : region}</Span>
        <Div>
          <ion-icon name="chevron-down-outline"></ion-icon>
        </Div>
      </Button>
      <Options style={{display: open ? "block" : "none"}}>
        {regions.map((region, index) => (
          <Option key={index} onClick={(e) => handleSelectOption(e.target.innerText)}>{region}</Option>
        ))}
      </Options>
    </Container>
  );
};

export default Filter;
