import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2.4rem;
  background-color: ${({ theme }) => theme.element};
  border: none;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
`;

export const Span = styled.span`
  font-size: 1.2rem;
  line-height: 1.2;
  color: ${({ theme }) => theme.text};
`;

export const Div = styled.div`
  color: ${({ theme }) => theme.text};
`;

export const Container = styled.section`
  position: relative;
  width: 20rem;
`;

export const Options = styled.section`
  margin-top: 4px;
  border-radius: 5px;
  position: absolute;
  width: 100%;
`;

export const Option = styled.div`
  font-size: 1.2rem;
  background-color: ${({ theme }) => theme.element};
  color: ${({ theme }) => theme.text};
  padding: 8px 0;
  padding-left: 2.4rem;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.hover};
  }
`;
