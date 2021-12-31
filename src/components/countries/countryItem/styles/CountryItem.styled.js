import styled from "styled-components";

export const StyledArticle = styled.article`
  width: 100%;
  cursor: pointer;
  /* margin-bottom: 4em; */
  background-color: ${({theme}) => theme.element};
  border-radius: 5px;
  padding-bottom: 3.8em;
  transition: transform .2s ease-in-out;
  &:hover {
    transform: translateY(-1rem);
  }
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

export const StyledDiv = styled.div`
  max-height: 16rem;
  width: 100%;
`

export const StyledFlag = styled.img`
  width: 100%;
  height: 16rem;
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