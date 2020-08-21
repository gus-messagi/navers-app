import { createGlobalStyle } from 'styled-components';

export const theme = {
    primary: '#212121',
    secondary: '#FFF',
    colorInputPlaceholder: '#9E9E9E',
    colorInputBorder: '#424242',
};

const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 60% !important;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100vh;
    }

    body, button, input {
        font: 400 1.6rem Montserrat;
        color: ${theme.primary}
    }

    @media (min-width: 700px) {
        :root {
            font-size: 62.5% !important;
        }
    }
`;

export default GlobalStyle;
