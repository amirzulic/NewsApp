import React from "react";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Page from "./components/Page";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const theme = createTheme({
    palette: {
        primary: {
            main: '#e8d7a7'
        },
        secondary: {
            main: '#f2e9ce',
            dark: '#595751'
        }
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Page/>}></Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
