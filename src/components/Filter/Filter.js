import { useState } from "react";
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
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Container>
      <Button onClick={handleClick}>
        <Span>Filter by Region</Span>
        <Figure>
          <ion-icon name="chevron-down-outline"></ion-icon>
        </Figure>
      </Button>
      <Options style={{display: open ? "block" : "none"}}>
        {regions.map((region, index) => (
          <Option key={index}>{region}</Option>
        ))}
      </Options>
    </Container>
  );
};

export default Filter;
