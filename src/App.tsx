import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {createTheme, ThemeProvider} from '@mui/material/styles';

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
                <Navbar/>
                <Footer/>
            </ThemeProvider>
        </div>
    );
}

export default App;
