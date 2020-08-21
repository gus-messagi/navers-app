import React from 'react';
import { ThemeProvider } from 'styled-components';
import Routes from '../Routes';
import GlobalStyle, { theme } from '../globalStyle';
import { AuthProvider } from '../../context/AuthContext';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <AuthProvider>
                <Routes />
            </AuthProvider>
            <GlobalStyle />
        </ThemeProvider>
    );
}

export default App;
