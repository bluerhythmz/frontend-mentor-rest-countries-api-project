import styled from "styled-components";

export const StyledMain = styled.main`
  max-width: 90%;
  margin: 0 auto;
`;

export const StyledSubArticle = styled.article`
  margin-top: 3.2rem;
`;

export const StyledH1 = styled.h1`
  margin-top: 4.4rem;
  font-size: 2.2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.text};
`;

export const StyledH2 = styled.h2`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;

export const StyledP = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.text};
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

export const StyledFigure = styled.figure`
  margin-top: 6.4rem;
`

export const StyledImage = styled.img`
  max-width: 100%;
`

export const StyledArticle = styled(StyledSubArticle)`

`