import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Avatar,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import StarIcon from "@mui/icons-material/Star";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MagicParticles from "./MagicParticles";
import logo from "../assets/LOGO_MAGIC_BRINQUEDOS.png";

const HeroSection = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de conhecer os brinquedos da Magic Brinquedos!"
    );
    window.open(`https://wa.me/5511915962801?text=${message}`, "_blank");
  };

  const handleScrollDown = () => {
    document.querySelector("#produtos").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Background com formas geométricas */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)",
        }}
      />

      <MagicParticles />

      {/* Elementos flutuantes decorativos */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          color: "#FFC107",
          zIndex: 2,
        }}
      >
        <StarIcon sx={{ fontSize: 40 }} />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          top: "20%",
          right: "10%",
          color: "#FF6B9D",
          zIndex: 2,
        }}
      >
        <AutoAwesomeIcon sx={{ fontSize: 50 }} />
      </motion.div>

      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          bottom: "20%",
          left: "15%",
          color: "#4CAF50",
          zIndex: 2,
        }}
      >
        <FavoriteIcon sx={{ fontSize: 35 }} />
      </motion.div>

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 3,
          mt: 10,
          mb: 15,
        }}
      >
        <Grid container spacing={6} alignItems="center">
          {/* Coluna da Esquerda - Conteúdo Principal */}
          <Grid size={{ xs: 12, lg: 7 }}>
            <Box sx={{ color: "white" }}>
              {/* Badge de destaque */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Chip
                  icon={<AutoAwesomeIcon />}
                  label="✨ Loja Oficial Magic Brinquedos"
                  sx={{
                    backgroundColor: "rgba(255,255,255,0.2)",
                    color: "white",
                    fontWeight: 600,
                    mb: 3,
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.3)",
                  }}
                />
              </motion.div>

              {/* Logo Principal no lugar do título */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Box
                  component="img"
                  src={logo}
                  alt="Magic Brinquedos"
                  sx={{
                    height: { xs: "120px", md: "160px", lg: "200px" },
                    mb: 3,
                    filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.3))",
                    maxWidth: "100%",
                  }}
                />
              </motion.div>

              {/* Subtítulo mágico */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "2rem", md: "2.5rem", lg: "3rem" },
                    fontWeight: 700,
                    mb: 3,
                    lineHeight: 1.2,
                    textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                    color: "warning.main", // Amarelo do tema
                  }}
                >
                  Aqui a brincadeira é mágica! ✨
                </Typography>
              </motion.div>

              {/* Descrição */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    opacity: 0.9,
                    lineHeight: 1.5,
                    fontWeight: 400,
                    fontSize: { xs: "1.1rem", md: "1.3rem" },
                  }}
                >
                  Descubra o mundo mágico dos brinquedos! Oferecemos uma
                  experiência única com produtos de qualidade que transformam
                  sonhos em realidade. Venha fazer parte da nossa família
                  mágica!
                </Typography>
              </motion.div>

              {/* Estatísticas */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: 3,
                    mb: 4,
                    flexWrap: "wrap",
                  }}
                >
                  <Box sx={{ textAlign: "center" }}>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 700,
                        color: "warning.main", // Amarelo do tema
                        mb: 0.5,
                      }}
                    >
                      4500+
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      Produtos Mágicos
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: "center" }}>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 700,
                        color: "primary.main", // Rosa do tema
                        mb: 0.5,
                      }}
                    >
                      10000+
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      Clientes Felizes
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: "center" }}>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 700,
                        color: "success.main", // Verde do tema
                        mb: 0.5,
                      }}
                    >
                      4.9★
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      Avaliação Média
                    </Typography>
                  </Box>
                </Box>
              </motion.div>

              {/* Botões de Ação */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    flexWrap: "wrap",
                    mb: 4,
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      startIcon={<WhatsAppIcon />}
                      onClick={handleWhatsApp}
                      sx={{
                        background:
                          "linear-gradient(45deg, #25D366 30%, #128C7E 90%)", // theme.palette.magic.whatsapp
                        color: "white",
                        fontSize: "1.1rem",
                        padding: "16px 40px",
                        borderRadius: "50px",
                        boxShadow: "0 8px 24px rgba(37, 211, 102, 0.4)",
                        fontWeight: 600,
                        "&:hover": {
                          background:
                            "linear-gradient(45deg, #128C7E 30%, #25D366 90%)", // theme.palette.magic.whatsappDark
                          transform: "translateY(-3px)",
                          boxShadow: "0 12px 32px rgba(37, 211, 102, 0.6)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      Fale Conosco no WhatsApp
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outlined"
                      size="large"
                      startIcon={<PlayArrowIcon />}
                      onClick={handleScrollDown}
                      sx={{
                        borderColor: "white",
                        color: "white",
                        fontSize: "1.1rem",
                        padding: "16px 40px",
                        borderRadius: "50px",
                        fontWeight: 600,
                        borderWidth: "2px",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255,0.1)",
                          borderColor: "white",
                          transform: "translateY(-3px)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      Ver Produtos
                    </Button>
                  </motion.div>
                </Box>
              </motion.div>

              {/* Informações de Contato */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    flexWrap: "wrap",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      backgroundColor: "rgba(255,255,255,0.1)",
                      padding: "10px 20px",
                      borderRadius: "30px",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.2)",
                    }}
                  >
                    <LocationOnIcon
                      sx={{ fontSize: 20, color: "warning.main" }}
                    />
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      São Paulo, SP
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      backgroundColor: "rgba(255,255,255,0.1)",
                      padding: "10px 20px",
                      borderRadius: "30px",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.2)",
                    }}
                  >
                    <PhoneIcon sx={{ fontSize: 20, color: "primary.main" }} />
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      (11) 91596-2801
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
        }}
      >
        <motion.div
          animate={{
            y: [0, 15, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          onClick={handleScrollDown}
          style={{ cursor: "pointer" }}
        >
          <Box
            sx={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(10px)",
              border: "2px solid rgba(255,255,255,0.3)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
            }}
          >
            <PlayArrowIcon
              sx={{ color: "white", transform: "rotate(90deg)", fontSize: 28 }}
            />
          </Box>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default HeroSection;
