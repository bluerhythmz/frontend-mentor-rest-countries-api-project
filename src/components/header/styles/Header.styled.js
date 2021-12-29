import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3em 1.6em;
  background-color: ${({theme}) => theme.element};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
`

export const StyledH1 = styled.h1`
  font-size: 1.4rem;
  font-weight: 800;
  color: ${({theme}) => theme.text}
`