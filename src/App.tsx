import React from "react";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Page from "./components/Page";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SingleReport from "./components/SingleReport";

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
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Page/>}></Route>
                    <Route path="/report/:id" element={<SingleReport/>}></Route>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
