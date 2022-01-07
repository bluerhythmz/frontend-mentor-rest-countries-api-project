import { useState, useRef, useEffect } from "react";
import {
  Button,
  Container,
  Figure,
  Option,
  Options,
  Span,
} from "./Filter.styled";

const Filter = ({ handleSelect, region }) => {
  const [open, setOpen] = useState(false);
  const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];
  const filterRef = useRef()
  
  const handleClick = () => {
    setOpen(!open);
  };

  const handleOptionClick = () => {
    setOpen(false)
  }

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
      <Button onClick={handleClick}>
        <Span>{region === "All" ? "Filter by Region" : region}</Span>
        <Figure>
          <ion-icon name="chevron-down-outline"></ion-icon>
        </Figure>
      </Button>
      <Options style={{display: open ? "block" : "none"}}>
        {regions.map((region, index) => (
          <Option key={index} onClick={(e) => handleSelect(e.target.innerText, handleOptionClick)}>{region}</Option>
        ))}
      </Options>
    </Container>
  );
};

export default Filter;
