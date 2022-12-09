import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ReportsTabs from './components/reports/ReportsTabs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SingleReport from './components/reports/SingleReport';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e8d7a7',
      light: '#fcf5e1'
    },
    secondary: {
      main: '#f2e9ce',
      dark: '#595751'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ReportsTabs />}></Route>
          <Route path="/report/:id" element={<SingleReport />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
