import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Box } from "@mui/material";
import theme from "./theme";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import Stats from "./components/Stats";
import FeaturedProducts from "./components/FeaturedProducts";
import Categories from "./components/Categories";
import Testimonials from "./components/Testimonials";
import InstagramFeed from "./components/InstagramFeed";
import Location from "./components/Location";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          width: "100%",
          maxWidth: "100vw",
          overflow: "hidden",
        }}
      >
        <Navigation />

        <div id="home">
          <HeroSection />
        </div>

        <div id="stats">
          <Stats />
        </div>

        <div id="produtos">
          <FeaturedProducts />
        </div>

        <div id="categorias">
          <Categories />
        </div>

        <div id="depoimentos">
          <Testimonials />
        </div>

        <div id="instagram">
          <InstagramFeed />
        </div>

        <div id="localizacao">
          <Location />
        </div>

        <Footer />
        <FloatingWhatsApp />
      </Box>
    </ThemeProvider>
  );
}

export default App;
