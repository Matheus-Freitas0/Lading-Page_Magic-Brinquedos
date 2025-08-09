import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const logo = "/assets/LOGO_MAGIC_BRINQUEDOS.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { name: "Início", href: "#home" },
    { name: "Produtos", href: "#produtos" },
    { name: "Categorias", href: "#categorias" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Instagram", href: "#instagram" },
    { name: "Localização", href: "#localizacao" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de conhecer os brinquedos da Magic Brinquedos!"
    );
    window.open(`https://wa.me/5511915962801?text=${message}`, "_blank");
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <AppBar
          position="fixed"
          sx={{
            background: isScrolled
              ? "rgba(255, 107, 157, 0.95)"
              : "transparent",
            backdropFilter: isScrolled ? "blur(10px)" : "none",
            boxShadow: isScrolled ? "0 4px 20px rgba(0,0,0,0.1)" : "none",
            transition: "all 0.3s ease",
          }}
        >
          <Container maxWidth="lg">
            <Toolbar sx={{ justifyContent: "space-between" }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("#home")}
                className="no-outline"
                style={{
                  cursor: "pointer",
                  outline: "none",
                  border: "none",
                  background: "none",
                  padding: 0,
                  display: "inline-block",
                }}
                onFocus={(e) => e.target.blur()}
                onMouseDown={(e) => e.preventDefault()}
              >
                <img
                  src={logo}
                  alt="Magic Brinquedos"
                  className="no-outline"
                  style={{
                    height: "50px",
                    filter: isScrolled ? "brightness(1.1)" : "brightness(1)",
                    transition: "all 0.3s ease",
                    outline: "none",
                    border: "none",
                    display: "block",
                  }}
                  onFocus={(e) => e.target.blur()}
                  onMouseDown={(e) => e.preventDefault()}
                />
              </motion.div>

              {/* Desktop Menu */}
              <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Button
                      onClick={() => scrollToSection(item.href)}
                      sx={{
                        color: "white",
                        fontWeight: 600,
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255,0.1)",
                          transform: "translateY(-2px)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      {item.name}
                    </Button>
                  </motion.div>
                ))}

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    variant="contained"
                    startIcon={<WhatsAppIcon />}
                    onClick={handleWhatsApp}
                    sx={{
                      backgroundColor: "#25D366",
                      color: "white",
                      fontWeight: 600,
                      "&:hover": {
                        backgroundColor: "#128C7E",
                        transform: "translateY(-2px)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    WhatsApp
                  </Button>
                </motion.div>
              </Box>

              {/* Mobile Menu Button */}
              <IconButton
                sx={{ display: { xs: "flex", md: "none" }, color: "white" }}
                onClick={() => setMobileOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </motion.div>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            background: "linear-gradient(135deg, #FF6B9D 0%, #FFA726 100%)",
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
            }}
          >
            <div
              onClick={() => scrollToSection("#home")}
              className="no-outline"
              style={{
                cursor: "pointer",
                outline: "none",
                border: "none",
                background: "none",
                padding: 0,
                display: "inline-block",
              }}
              onFocus={(e) => e.target.blur()}
              onMouseDown={(e) => e.preventDefault()}
            >
              <img
                src={logo}
                alt="Magic Brinquedos"
                className="no-outline"
                style={{
                  height: "40px",
                  outline: "none",
                  border: "none",
                  display: "block",
                }}
                onFocus={(e) => e.target.blur()}
                onMouseDown={(e) => e.preventDefault()}
              />
            </div>
            <IconButton
              onClick={() => setMobileOpen(false)}
              sx={{ color: "white" }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <List>
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ListItem
                  component="button"
                  onClick={() => scrollToSection(item.href)}
                  sx={{
                    borderRadius: 2,
                    mb: 1,
                    cursor: "pointer",
                    border: "none",
                    backgroundColor: "transparent",
                    width: "100%",
                    textAlign: "left",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  <ListItemText
                    primary={item.name}
                    sx={{
                      color: "white",
                      fontWeight: 600,
                    }}
                  />
                </ListItem>
              </motion.div>
            ))}
          </List>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button
              variant="contained"
              fullWidth
              startIcon={<WhatsAppIcon />}
              onClick={handleWhatsApp}
              sx={{
                backgroundColor: "#25D366",
                color: "white",
                fontWeight: 600,
                mt: 2,
                "&:hover": {
                  backgroundColor: "#128C7E",
                },
              }}
            >
              Fale Conosco
            </Button>
          </motion.div>
        </Box>
      </Drawer>
    </>
  );
};

export default Navigation;
