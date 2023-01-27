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
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    height: 124px;
  }
  img {
    margin-left: 398px;
    width: 393px;
    margin-bottom: 28px;
  }
  input {
    /* max-width: 80%; */
    flex: 1;
    margin-right: 16px;
    background: var(--white);
    border-radius: 8px;
    border: 2px solid #ee82ee;
    padding: irem;
    display: flex;
    margin-bottom: 10px;

    width: 275px;
    height: 47px;
  }
  input::placeholder {
    padding: 10px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    text-decoration: none;
    color: black;
    font-size: 18px;
    border-radius: 10px;
    width: 181px;
    height: 40px;
    font-weight: bold;
    border: 4px double #ffffff;
    transition: 0.3s;
    background-color: #b39ddb;
    margin-left: 507px;
    margin-top: 29px;
  }

  button:hover {
    opacity: 0.5;
  }
  span {
    color: orange;
    font-weight: bold;
    font-size: 20px;
    margin-left: 500px;
  }
`;

export const TaskContact = styled.div `
  padding: 0 38px;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  div {
    margin-top: 16px;
    margin-right: 32px;
  }
`;