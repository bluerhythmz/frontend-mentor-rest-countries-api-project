import styled from "styled-components";

export const StyledMain = styled.main`
  width: 90%;
  max-width: 125rem;
  margin: 0 auto;
`

export const StyledSection = styled.section`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  max-width: 70%;
  gap: 4rem;
  margin: 0 auto;
  margin-top: 4rem;
  @media (min-width: 87em) {
    max-width: 100%;
    gap: 7rem;
  }
`
export const StyledH2 = styled.h2`
  font-weight: 800;
  font-size: 1.8rem;
  line-height: 1.2;
`

export const StyledInputWrapper = styled.div`
  position: relative;
  padding: 0;
  margin: 0;
  margin-top: 2.4rem;
`

export const StyledDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translate(-50%, -50%);
`

export const StyledInput = styled.input`
  width: 90%;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  padding: 1em;
  padding-left: 1.5em;
  ::-moz-placeholder,
  ::placeholder {
    font-size: 1.2rem;
  }
`