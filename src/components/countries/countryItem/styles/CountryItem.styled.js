import styled from "styled-components";

export const StyledArticle = styled.article`
  cursor: pointer;
  margin-bottom: 4em;
  background-color: ${({theme}) => theme.element};
  border-radius: 5px;
  padding-bottom: 3.8em;
`

export const StyledSection = styled.section`
  padding-left: 2em;
`

export const StyledH2 = styled.h2`
  margin-top: 1.3em;
  margin-bottom: .9em;
  font-size: 1.8rem;
  line-height: 1.45;
  color: ${({theme}) => theme.text};
`

export const StyledFlag = styled.img`
  max-width: 100%;
  border-radius: 5px 5px 0 0;
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