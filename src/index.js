import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from "styled-components";
import { BrowserRouter } from 'react-router-dom';

const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&display=swap');
*,
*::before,
*::after {
  box-sizing: inherit;
}

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: #e1e1e1;
  border: 0px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-thumb:hover {
  background: #ffffff;
}
::-webkit-scrollbar-thumb:active {
  background: #000000;
}
::-webkit-scrollbar-track {
  background: #666666;
  border: 0px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-track:hover {
  background: #666666;
}
::-webkit-scrollbar-track:active {
  background: #333333;
}
::-webkit-scrollbar-corner {
  background: transparent;
}

body {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  background-color:#252836;
  font-family: 'Barlow', sans-serif;
}

img {
  max-width: 100%;
  height: auto;
}
ul{
  list-style: none;
  padding: 0;
  margin: 0;
}
a{
  text-decoration: none;
  color: unset;
}
h1,
h2,
h3,
h4,
h5,
h6{
  margin: 0;
}
p{
  margin: 0;
}
`
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Global />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
