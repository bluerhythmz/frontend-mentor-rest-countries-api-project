import styled from "styled-components";

export const Wrapper = styled.article`
  width: 100%;
  cursor: pointer;
  background-color: ${({theme}) => theme.element};
  border-radius: 5px;
  padding-bottom: 3.8em;
  transition: transform .2s ease-in-out;
  &:hover {
    transform: translateY(-1rem);
  }
`

export const Section = styled.section`
  padding-left: 2em;
`

export const Title = styled.h2`
  margin-top: 1.3em;
  margin-bottom: .9em;
  font-size: 1.8rem;
  line-height: 1.45;
  color: ${({theme}) => theme.text};
`

export const Figure = styled.figure`
  max-height: 16rem;
  width: 100%;
`

export const Image = styled.img`
  width: 100%;
  height: 16rem;
  border-radius: 5px 5px 0 0;
`

export const Text = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: ${({theme}) => theme.text};
`

export const Span = styled.span`
  font-weight: 300;
  color: ${({theme}) => theme.text};
`