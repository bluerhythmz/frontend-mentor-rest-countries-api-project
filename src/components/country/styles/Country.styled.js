import styled from "styled-components";

export const StyledMain = styled.main`
  max-width: 90%;
  margin: 0 auto;
`

export const StyledH1 = styled.h1`
  font-size: 2.2rem;
  font-weight: 800;
  color: ${({theme}) => theme.text};
`

export const StyledP = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: ${({theme}) => theme.text};
`

export const StyledSpan = styled.span`
  font-weight: 300;
  color: ${({theme}) => theme.text};
`

export const StyledButtonGrid = styled.div`
  display: grid;
  gap: 1rem;
`