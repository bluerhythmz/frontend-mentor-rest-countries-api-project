import React from "react";
import { StyledBackButton, StyledButton } from "./styles/Button.styled";

const Button = ({ label, handleClick }) => {
  return (
    <>
      {label === "Back" ? (
        <StyledBackButton onClick={handleClick}>{label}</StyledBackButton>
      ) : (
        <StyledButton onClick={handleClick}>{label}</StyledButton>
      )}
    </>
  );
};

export default Button;
