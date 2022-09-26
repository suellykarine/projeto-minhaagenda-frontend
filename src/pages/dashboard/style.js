import styled from "styled-components";

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 38px;
`;

export const InputContanier = styled.form `
  flex: 1;
  margin-top: 32px;
  padding: 0 38px;
  section {
    display: flex;
    margin-top: 20px;
  }
  input {
    max-width: 80%;
    flex: 1;
    margin-right: 16px;
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

  button {
    max-width: 260px;
    height: 60px;
    margin: 0;
    margin-top: 25px;
  }
  span {
    color: orange;
    font-weight: bold;
    font-size: 20px;
  }
`;

export const TaskContact = styled.div `
  padding: 0 38px;
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  div {
    margin-top: 16px;
    margin-right: 32px;
  }
`;