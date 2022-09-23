import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

:root{
    --white: #f5f5f5;
    --vanilla: #f1ede0;
    --black: #0c0d0d;
    --violet: #EE82EE
    --orange: #ffa500;
}

body{
    background: var(--vanilla);
    color: var(--black);
}
body, input, button{
    font-family: serif;
    font-size: 1rem
}

h1,h2,h3,h4,h5,h6{
    font-family: serif;
    font-weight: 700
}

button{
    cursor: pointer;
    width: 100px;
    border-radius: 5px;
    border: solid orange 2px;
    margin-right: 72px;
    color: blue;
}

a{
    text-decoration: none
}
`;