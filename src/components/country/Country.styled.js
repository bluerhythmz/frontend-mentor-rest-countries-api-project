import styled from "styled-components";

export const Loading = styled.h1`
  font-size: 3rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const Main = styled.main`
  max-width: 90%;
  margin: 0 auto;
`;

export const Section = styled.section`
  display: grid;
  gap: 3.2rem;
  @media (min-width: 40em) {
    max-width: 70%;
    margin: 0 auto;
  }
  @media (min-width: 1440px) {
    grid-auto-flow: column;
  }
`;

export const ContentGrid = styled.article`
  display: grid;
  gap: 3rem;
  grid-template-areas:
    "title"
    "contentOne"
    "contentTwo"
    "borderCountries";

  @media (min-width: 800px) {
    grid-template-areas:
      "title title"
      "contentOne contentTwo"
      "borderCountries borderCountries";
  }

  @media (min-width: 1440px) {
    align-self: center;
    justify-self: center;
  }
`;

export const TextWrapperOne = styled.article`
  margin-top: 3.2rem;
  grid-area: contentOne;
  @media (min-width: 1440px) {
    margin-top: 0rem;
  }
`;

export const TextWrapperTwo = styled.article`
  margin-top: 3.2rem;
  grid-area: contentTwo;

  @media (min-width: 800px) {
    /* margin-top: 5rem; */
  }

  @media (min-width: 1440px) {
    margin-top: 0rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.text};
  grid-area: title;
  @media (min-width: 87em) {
    font-size: 3.2rem;
    margin-top: 4.4rem;
  }
  @media (min-width: 100em) {
    font-size: 3.6rem;
  }
`;

export const SubTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  @media (min-width: 87em) {
    font-size: 2rem;
  }
`;

export const P = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.text};
  @media (min-width: 87em) {
    font-size: 1.6rem;
  }
  @media (min-width: 100em) {
    font-size: 2rem;
  }
`;

export const StyledSpan = styled.span`
  font-weight: 300;
  color: ${({ theme }) => theme.text};
`;

export const StyledButtonGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
  margin-top: 1.6rem;
`;

export const FIgure = styled.figure`
  margin-top: 6.4rem;
  width: 100%;
`;

export const Image = styled.img`
  min-width: 100%;
  border-radius: 1rem;
`;

export const BorderCountriesWrapper = styled.article`
  grid-area: borderCountries;
`;
