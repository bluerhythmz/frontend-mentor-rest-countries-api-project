import styled from "styled-components";

export const StyledButton = styled.button`
  font-size: 1.4rem;
  font-weight: 300;
  padding: .6rem 0;
  background-color: ${({theme}) => theme.background};
  color: ${({theme}) => theme.text};
  border-radius: 2px;
  border: none;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.293139);
  cursor: pointer;
  transition: all .5s ease;
  :hover {
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.793139);
  }
`
export const StyledBackButton = styled(StyledButton)`
  padding: .6rem 2.3rem;
`