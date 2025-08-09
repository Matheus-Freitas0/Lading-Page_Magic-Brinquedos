import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Container,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BrushIcon from "@mui/icons-material/Brush";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import ExtensionIcon from "@mui/icons-material/Extension";
const Categories = () => {
  const theme = useTheme();

  const categories = [
    {
      id: 1,
      name: "Educativos",
      icon: SchoolIcon,
      color: theme.palette.success.main,
      description: "Aprenda brincando!",
    },
    {
      id: 2,
      name: "Eletrônicos",
      icon: SmartToyIcon,
      color: theme.palette.magic.purple,
      description: "Tecnologia divertida",
    },
    {
      id: 3,
      name: "Bonecas",
      icon: FavoriteIcon,
      color: theme.palette.primary.main,
      description: "Sonhos e fantasias",
    },
    {
      id: 4,
      name: "Carrinhos",
      icon: DirectionsCarIcon,
      color: theme.palette.secondary.main,
      description: "Velocidade e aventura",
    },
    {
      id: 5,
      name: "Jogos",
      icon: SportsEsportsIcon,
      color: theme.palette.info.main,
      description: "Diversão em família",
    },
    {
      id: 6,
      name: "Pelúcias",
      icon: FavoriteIcon,
      color: theme.palette.warning.main,
      description: "Fofura e carinho",
    },
    {
      id: 7,
      name: "Criatividade",
      icon: BrushIcon,
      color: theme.palette.magic.teal,
      description: "Arte e imaginação",
    },
    {
      id: 8,
      name: "Tabuleiro",
      icon: ExtensionIcon,
      color: theme.palette.magic.brown,
      description: "Diversão estratégica",
    },
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: "white" }}>
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
            Nossas Categorias 🎯
          </Typography>
        </motion.div>

        <Grid container spacing={3}>
          {categories.map((category, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={category.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "translateY(-8px) scale(1.02)",
                      boxShadow: "0 16px 32px rgba(0,0,0,0.2)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: 120,
                      backgroundColor: category.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <category.icon
                      sx={{
                        fontSize: 60,
                        color: "white",
                      }}
                    />
                  </Box>
                  <CardContent sx={{ p: 3, textAlign: "center" }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 1,
                        color: "text.primary",
                      }}
                    >
                      {category.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        fontSize: "0.9rem",
                      }}
                    >
                      {category.description}
                    </Typography>
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

export default Categories;
