import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Container,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import StarIcon from "@mui/icons-material/Star";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      role: "Mãe da Ana, 6 anos",
      content:
        "A Magic Brinquedos é incrível! Minha filha adora os brinquedos educativos. A qualidade é excelente e o atendimento é muito atencioso. Recomendo para todas as famílias!",
      rating: 5,
      avatar: "https://via.placeholder.com/80x80/FF6B9D/FFFFFF?text=MS",
    },
    {
      id: 2,
      name: "João Santos",
      role: "Pai do Pedro, 8 anos",
      content:
        "Comprei um carrinho para meu filho e ele ficou encantado! Os brinquedos são resistentes e duram muito. A loja tem uma variedade incrível de opções.",
      rating: 5,
      avatar: "https://via.placeholder.com/80x80/FFA726/FFFFFF?text=JS",
    },
    {
      id: 3,
      name: "Carla Oliveira",
      role: "Mãe da Sofia, 4 anos",
      content:
        "A Magic Brinquedos sempre tem os melhores preços e produtos de qualidade. Minha filha adora as bonecas e pelúcias. É nossa loja preferida!",
      rating: 5,
      avatar: "https://via.placeholder.com/80x80/4CAF50/FFFFFF?text=CO",
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, index) => (
      <StarIcon
        key={index}
        sx={{
          color: "#FFC107",
          fontSize: 20,
        }}
      />
    ));
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
            O que nossos clientes dizem 💬
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={testimonial.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 16px 32px rgba(0,0,0,0.2)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 4, textAlign: "center" }}>
                    <Box sx={{ mb: 3 }}>
                      <FormatQuoteIcon
                        sx={{
                          fontSize: 40,
                          color: "primary.main",
                          opacity: 0.3,
                        }}
                      />
                    </Box>

                    <Typography
                      variant="body1"
                      sx={{
                        mb: 3,
                        fontStyle: "italic",
                        color: "text.secondary",
                        lineHeight: 1.6,
                      }}
                    >
                      "{testimonial.content}"
                    </Typography>

                    <Box sx={{ mb: 2 }}>{renderStars(testimonial.rating)}</Box>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 2,
                      }}
                    >
                      <Avatar
                        src={testimonial.avatar}
                        sx={{
                          width: 60,
                          height: 60,
                          mr: 2,
                        }}
                      />
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            color: "text.primary",
                          }}
                        >
                          {testimonial.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "text.secondary",
                          }}
                        >
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
