import styled from "styled-components";

export const Container = styled.div `
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Background = styled.div `
  @media (min-width: 1100px) {
    flex: 1;
    background: no-repeat center;
    background-color: #ee82ee;
  }
`;

export const Content = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
`;

export const FormDiv = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    margin-top: 8px;
    color: blue;
    margin-right: 50px;
    font-size: 50px;
  }

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    h1 {
      margin-bottom: 32px;
    }

    input {
      background: var(--white);
      border-radius: 8px;
      border: 2px solid #ee82ee;
      padding: irem;
      display: flex;
      margin-bottom: 10px;
      width: 250px;
      height: 30px;
    }
    input::placeholder {
      padding: 10px;
    }
  }
`;