import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Container,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import DirectionsIcon from "@mui/icons-material/Directions";

const Location = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de saber mais sobre a Magic Brinquedos! 🎈✨"
    );
    window.open(`https://wa.me/5511915962801?text=${message}`, "_blank");
  };

  const handleDirections = () => {
    const address = encodeURIComponent(
      "R. Abílio Pedro Ramos, 672 - Vila Nilo, São Paulo - SP, 02279-000"
    );
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${address}`,
      "_blank"
    );
  };

  return (
    <Box sx={{ py: 8, backgroundColor: "#FAFAFA" }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              mb: 6,
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: 700,
              color: "primary.main",
            }}
          >
            Venha nos Visitar 📍
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {/* Informações da Loja */}
          <Grid size={{ xs: 12, md: 4 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      mb: 4,
                      color: "primary.main",
                    }}
                  >
                    Magic Brinquedos
                  </Typography>

                  <Box sx={{ mb: 4 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <LocationOnIcon sx={{ color: "primary.main", mr: 2 }} />
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          Endereço
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary" }}
                        >
                          R. Abílio Pedro Ramos, 672
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary" }}
                        >
                          Vila Nilo, São Paulo - SP
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary" }}
                        >
                          CEP: 02279-000
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <AccessTimeIcon sx={{ color: "primary.main", mr: 2 }} />
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          Horário de Funcionamento
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary" }}
                        >
                          Segunda a Sábado: 09:00 - 19:00
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary" }}
                        >
                          Domingo: Fechado
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                      <PhoneIcon sx={{ color: "primary.main", mr: 2 }} />
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          Telefone
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary" }}
                        >
                          (11) 91596-2801
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    <Button
                      variant="contained"
                      startIcon={<WhatsAppIcon />}
                      onClick={handleWhatsApp}
                      sx={{
                        backgroundColor: "#25D366",
                        color: "white",
                        "&:hover": {
                          backgroundColor: "#128C7E",
                        },
                        borderRadius: 2,
                      }}
                    >
                      Fale Conosco
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<DirectionsIcon />}
                      onClick={handleDirections}
                      sx={{
                        borderColor: "primary.main",
                        color: "primary.main",
                        "&:hover": {
                          borderColor: "primary.dark",
                          backgroundColor: "primary.main",
                          color: "white",
                        },
                        borderRadius: 2,
                      }}
                    >
                      Como Chegar
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Google Maps */}
          <Grid size={{ xs: 12, md: 8 }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                }}
              >
                <Box
                  sx={{
                    height: 570,
                    width: "100%",
                    backgroundColor: "#f5f5f5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps?q=Magic+Brinquedos,+R.+Abílio+Pedro+Ramos+672,+Vila+Nilo,+São+Paulo,+SP,+02279-000&output=embed&z=16"
                    width="600"
                    height="450"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    title="Localização Magic Brinquedos"
                  ></iframe>
                </Box>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Location;
