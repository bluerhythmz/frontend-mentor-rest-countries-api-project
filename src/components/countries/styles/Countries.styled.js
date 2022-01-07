import styled from "styled-components";

export const StyledMain = styled.main`
  width: 90%;
  max-width: 125rem;
  margin: 0 auto;
`;

export const StyledInputsContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  @media (min-width: 47em) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

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
`;
export const StyledH2 = styled.h2`
  font-weight: 800;
  font-size: 1.8rem;
  line-height: 1.2;
`;

export const StyledInputWrapper = styled.div`
  position: relative;
  padding: 0;
  margin: 0;
  width: 100%;
  margin-top: 2.4rem;
  margin-bottom: 2.4rem;
  @media (min-width: 47rem) {
    width: 35%;
  }
`;

export const StyledDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 4rem;
  transform: translate(-50%, -50%);
  font-size: 1.6rem;
  color: ${({theme}) => theme.text};
`;

export const StyledImage = styled.img`
  width: 100%;
  color: white;
`;

export const StyledInput = styled.input`
  width: 100%;
  background-color: ${({theme}) => theme.element};
  color: ${({theme}) => theme.text};
  border: none;
  border-radius: 5px;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  padding: 1em;
  padding-left: 4.5em;
  ::-moz-placeholder,
  ::placeholder {
    font-size: 1.2rem;
    color: ${({theme}) => theme.text};
  }
`;
