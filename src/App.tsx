import React from "react";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Page from "./components/Page";

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
        <div>
            <ThemeProvider theme={theme}>
                <Page/>
            </ThemeProvider>
        </div>
    );
}

export default App;
