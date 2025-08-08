import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Container,
  Chip,
  Rating,
} from "@mui/material";
import { motion } from "framer-motion";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Boneca Mágica Aurora",
      image:
        "https://via.placeholder.com/300x300/FF6B9D/FFFFFF?text=Boneca+Mágica",
      category: "Bonecas",
      price: "R$ 89,90",
      rating: 5,
      isNew: true,
      isPopular: true,
    },
    {
      id: 2,
      name: "Carrinho Turbo Racing",
      image:
        "https://via.placeholder.com/300x300/FFA726/FFFFFF?text=Carrinho+Turbo",
      category: "Carrinhos",
      price: "R$ 129,90",
      rating: 4,
      isNew: false,
      isPopular: true,
    },
    {
      id: 3,
      name: "Jogo Educativo ABC",
      image: "https://via.placeholder.com/300x300/4CAF50/FFFFFF?text=Jogo+ABC",
      category: "Educativos",
      price: "R$ 69,90",
      rating: 5,
      isNew: true,
      isPopular: false,
    },
    {
      id: 4,
      name: "Pelúcia Estrela Brilhante",
      image:
        "https://via.placeholder.com/300x300/2196F3/FFFFFF?text=Pelúcia+Estrela",
      category: "Pelúcias",
      price: "R$ 79,90",
      rating: 4,
      isNew: false,
      isPopular: true,
    },
    {
      id: 5,
      name: "Robô Inteligente Max",
      image: "https://via.placeholder.com/300x300/9C27B0/FFFFFF?text=Robô+Max",
      category: "Eletrônicos",
      price: "R$ 199,90",
      rating: 5,
      isNew: true,
      isPopular: true,
    },
    {
      id: 6,
      name: "Kit Criatividade Mágica",
      image:
        "https://via.placeholder.com/300x300/009688/FFFFFF?text=Kit+Criatividade",
      category: "Criatividade",
      price: "R$ 149,90",
      rating: 4,
      isNew: false,
      isPopular: false,
    },
    {
      id: 7,
      name: "Quebra-Cabeça 3D Castelo",
      image:
        "https://via.placeholder.com/300x300/E91E63/FFFFFF?text=Quebra+Cabeça",
      category: "Jogos",
      price: "R$ 119,90",
      rating: 5,
      isNew: true,
      isPopular: false,
    },
    {
      id: 8,
      name: "Dinossauro Gigante Rex",
      image:
        "https://via.placeholder.com/300x300/795548/FFFFFF?text=Dinossauro+Rex",
      category: "Figuras de Ação",
      price: "R$ 159,90",
      rating: 4,
      isNew: false,
      isPopular: true,
    },
  ];

  const handleWhatsApp = (productName) => {
    const message = encodeURIComponent(
      `Olá! Gostaria de saber mais sobre o brinquedo: ${productName} 🎈✨`
    );
    window.open(`https://wa.me/5511915962801?text=${message}`, "_blank");
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
              mb: 2,
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: 700,
              color: "primary.main",
            }}
          >
            Produtos em Destaque ✨
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              mb: 6,
              color: "text.secondary",
              maxWidth: 600,
              mx: "auto",
            }}
          >
            Descubra nossos brinquedos mais populares e novidades mágicas que
            vão encantar crianças de todas as idades!
          </Typography>
        </motion.div>

        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
        >
          {products.map((product, index) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 3, lg: 3, xl: 3 }}
              key={product.id}
              sx={{
                display: "flex",
                justifyContent: { xs: "center", sm: "flex-start" },
                height: "auto",
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ width: "100%", height: "100%" }}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                    transition: "all 0.3s ease",
                    position: "relative",
                    maxWidth: { xs: "350px", sm: "none" },
                    mx: { xs: "auto", sm: 0 },
                    minHeight: "500px",
                    "&:hover": {
                      transform: "translateY(-12px) scale(1.02)",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                    },
                  }}
                >
                  {/* Badges */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 12,
                      left: 12,
                      zIndex: 2,
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                    }}
                  >
                    {product.isNew && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        <Chip
                          label="NOVO"
                          size="small"
                          sx={{
                            backgroundColor: "#4CAF50",
                            color: "white",
                            fontWeight: 600,
                            fontSize: "0.7rem",
                          }}
                        />
                      </motion.div>
                    )}
                    {product.isPopular && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.4 }}
                      >
                        <Chip
                          icon={<TrendingUpIcon />}
                          label="POPULAR"
                          size="small"
                          sx={{
                            backgroundColor: "#FF6B9D",
                            color: "white",
                            fontWeight: 600,
                            fontSize: "0.7rem",
                          }}
                        />
                      </motion.div>
                    )}
                  </Box>

                  <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={product.name}
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      p: 3,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          mb: 2,
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            color: "text.primary",
                            flex: 1,
                          }}
                        >
                          {product.name}
                        </Typography>
                      </Box>

                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          mb: 2,
                          fontWeight: 500,
                        }}
                      >
                        {product.category}
                      </Typography>

                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 2 }}
                      >
                        <Rating
                          value={product.rating}
                          readOnly
                          size="small"
                          sx={{ mr: 1 }}
                        />
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary" }}
                        >
                          ({product.rating})
                        </Typography>
                      </Box>

                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          color: "primary.main",
                          mb: 2,
                        }}
                      >
                        {product.price}
                      </Typography>
                    </Box>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="contained"
                        startIcon={<WhatsAppIcon />}
                        onClick={() => handleWhatsApp(product.name)}
                        fullWidth
                        sx={{
                          backgroundColor: "#25D366",
                          color: "white",
                          fontWeight: 600,
                          borderRadius: 2,
                          py: 1.5,
                          "&:hover": {
                            backgroundColor: "#128C7E",
                            transform: "translateY(-2px)",
                          },
                          transition: "all 0.3s ease",
                        }}
                      >
                        Quero esse!
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: "center", mt: 6 }}>
            <Typography
              variant="h6"
              sx={{
                color: "text.secondary",
                mb: 2,
              }}
            >
              Não encontrou o que procurava?
            </Typography>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outlined"
                startIcon={<WhatsAppIcon />}
                onClick={() => handleWhatsApp("produtos")}
                sx={{
                  borderColor: "primary.main",
                  color: "primary.main",
                  fontWeight: 600,
                  borderRadius: 2,
                  px: 4,
                  py: 1.5,
                  "&:hover": {
                    borderColor: "primary.dark",
                    backgroundColor: "primary.main",
                    color: "white",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Ver Mais Produtos
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default FeaturedProducts;
