import styled from "styled-components";

export const Main = styled.main`
  max-width: 90%;
  margin: 0 auto;
`;

export const Section = styled.section`
  display: grid;
  @media (min-width: 1440px) {
    grid-auto-flow: column;
  }
`;

export const StyledSubArticle = styled.article`
  margin-top: 3.2rem;
`;

export const Title = styled.h1`
  margin-top: 4.4rem;
  font-size: 2.2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.text};
  @media (min-width: 1440px) {
    font-size: 3.2rem;
  }
`;

export const SubTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;

export const P = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.text};
  @media (min-width: 1440px) {
    font-size: 1.6rem;
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
  width: 90%;
`;

export const Image = styled.img`
  min-width: 100%;
  border-radius: 1rem;
`;

export const StyledArticle = styled(StyledSubArticle)``;
