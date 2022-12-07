import React from "react";
import Navbar from "./components/Navbar";
import {createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#e8d7a7'
        },
        secondary: {
            main: '#f2e9ce'
        }
    },
});

function App() {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Navbar/>
            </ThemeProvider>
        </div>
    );
}

export default App;
