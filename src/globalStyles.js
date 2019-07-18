import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body{
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    font-family: roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #4c4c4d;
    background-color: rgb(113, 89, 193);
    height: 100%;
}`;