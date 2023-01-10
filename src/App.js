import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto", '"Helvetica Neue"', "sans-serif"].join(","),
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Contact />
      <Footer />
    </Box>
  </ThemeProvider>
);

export default App;
