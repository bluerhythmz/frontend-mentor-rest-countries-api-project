import styled from "styled-components";

export const StyledButton = styled.button`
  font-size: 1.4rem;
  font-weight: 300;
  padding: .6rem 2.3rem;
  background-color: ${({theme}) => theme.background};
  border-radius: 2px;
  outline: none;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.293139);
  cursor: pointer;
`