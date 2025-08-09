import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  IconButton,
  Link,
} from "@mui/material";
import { motion } from "framer-motion";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import logo from "../assets/LOGO_MAGIC_BRINQUEDOS.png";

const Footer = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de saber mais sobre a Magic Brinquedos!"
    );
    window.open(`https://wa.me/5511915962801?text=${message}`, "_blank");
  };

  const handleInstagram = () => {
    window.open("https://www.instagram.com/magicbrinquedosoficial", "_blank");
  };

  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        color: "white",
        py: 6,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo e Descrição */}
          <Grid size={{ xs: 12, md: 4 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box
                component="img"
                src={logo}
                alt="Magic Brinquedos"
                sx={{
                  height: 80,
                  mb: 2,
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  opacity: 0.9,
                  lineHeight: 1.6,
                }}
              >
                Aqui a brincadeira é mágica! Oferecemos os melhores brinquedos
                para todas as idades, com qualidade e preços que cabem no seu
                bolso.
              </Typography>
            </motion.div>
          </Grid>

          {/* Links Rápidos */}
          <Grid size={{ xs: 12, md: 4 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: "white",
                }}
              >
                Links Rápidos
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Link
                  href="#produtos"
                  sx={{
                    color: "white",
                    textDecoration: "none",
                    opacity: 0.9,
                    "&:hover": {
                      opacity: 1,
                      textDecoration: "underline",
                    },
                  }}
                >
                  Produtos em Destaque
                </Link>
                <Link
                  href="#categorias"
                  sx={{
                    color: "white",
                    textDecoration: "none",
                    opacity: 0.9,
                    "&:hover": {
                      opacity: 1,
                      textDecoration: "underline",
                    },
                  }}
                >
                  Categorias
                </Link>
                <Link
                  href="#localizacao"
                  sx={{
                    color: "white",
                    textDecoration: "none",
                    opacity: 0.9,
                    "&:hover": {
                      opacity: 1,
                      textDecoration: "underline",
                    },
                  }}
                >
                  Localização
                </Link>
                <Link
                  href="#depoimentos"
                  sx={{
                    color: "white",
                    textDecoration: "none",
                    opacity: 0.9,
                    "&:hover": {
                      opacity: 1,
                      textDecoration: "underline",
                    },
                  }}
                >
                  Depoimentos
                </Link>
              </Box>
            </motion.div>
          </Grid>

          {/* Contato e Redes Sociais */}
          <Grid size={{ xs: 12, md: 4 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: "white",
                }}
              >
                Entre em Contato
              </Typography>

              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="body2"
                  sx={{
                    mb: 1,
                    opacity: 0.9,
                  }}
                >
                  R. Abílio Pedro Ramos, 672
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mb: 1,
                    opacity: 0.9,
                  }}
                >
                  Vila Nilo, São Paulo - SP
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mb: 2,
                    opacity: 0.9,
                  }}
                >
                  (11) 91596-2801
                </Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 2 }}>
                <IconButton
                  onClick={handleWhatsApp}
                  sx={{
                    backgroundColor: "#25D366",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#128C7E",
                      transform: "scale(1.1)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  <WhatsAppIcon />
                </IconButton>
                <IconButton
                  onClick={handleInstagram}
                  sx={{
                    backgroundColor: "#E4405F",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#C13584",
                      transform: "scale(1.1)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  sx={{
                    backgroundColor: "#1877F2",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#166FE5",
                      transform: "scale(1.1)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  sx={{
                    backgroundColor: "#EA4335",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#D33E2E",
                      transform: "scale(1.1)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  <EmailIcon />
                </IconButton>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Linha de Copyright */}
        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.2)",
            mt: 4,
            pt: 3,
            textAlign: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="body2"
              sx={{
                opacity: 0.8,
              }}
            >
              © 2022 Magic Brinquedos – Todos os direitos reservados.
            </Typography>
            <Box
              sx={{ mt: 1, display: "flex", justifyContent: "center", gap: 3 }}
            >
              <Link
                href="#termos"
                sx={{
                  color: "white",
                  textDecoration: "none",
                  opacity: 0.8,
                  fontSize: "0.875rem",
                  "&:hover": {
                    opacity: 1,
                    textDecoration: "underline",
                  },
                }}
              >
                Termos de Uso
              </Link>
              <Link
                href="#privacidade"
                sx={{
                  color: "white",
                  textDecoration: "none",
                  opacity: 0.8,
                  fontSize: "0.875rem",
                  "&:hover": {
                    opacity: 1,
                    textDecoration: "underline",
                  },
                }}
              >
                Política de Privacidade
              </Link>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
