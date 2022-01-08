import styled from "styled-components";

const Loader = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
  border: 1.6rem solid ${({ theme }) => theme.element};
  border-top: 1.6rem solid ${({ theme }) => theme.text};
  border-radius: 50%;
  width: 12rem;
  height: 12rem;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loading = () => {
  return <Loader />;
};

export default Loading;
