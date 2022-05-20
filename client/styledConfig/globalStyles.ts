import { createGlobalStyle } from 'styled-components';
import { fontsCSS } from './fontsCSS';

const GlobalStyles = createGlobalStyle`
    ${fontsCSS}
    
    * {
        margin: 0;
        padding: 0;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -ms-overflow-style: none;
        scrollbar-width: none;
        overscroll-behavior: none;
        overflow: hidden;
    } 

    body::-webkit-scrollbar {
        display: none;
    }
`;

export default GlobalStyles