import React from "react";
import { Box, Typography, Grid, Container, useTheme } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PeopleIcon from "@mui/icons-material/People";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import BusinessIcon from "@mui/icons-material/Business";
import StorefrontIcon from "@mui/icons-material/Storefront";

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const theme = useTheme();

  const stats = [
    {
      icon: PeopleIcon,
      number: 10000,
      suffix: "+",
      label: "Clientes Satisfeitos",
      color: theme.palette.primary.main, // Rosa
    },
    {
      icon: FavoriteIcon,
      number: 4500,
      suffix: "+",
      label: "Produtos Mágicos",
      color: theme.palette.secondary.main, // Laranja
    },
    {
      icon: StarIcon,
      number: 4.9,
      suffix: "",
      label: "Avaliação Média",
      color: theme.palette.warning.main, // Amarelo
    },
    {
      icon: BusinessIcon,
      number: 3,
      suffix: " anos",
      label: "Tempo de Mercado",
      color: theme.palette.success.main, // Verde
    },
    {
      icon: StorefrontIcon,
      number: 100,
      suffix: "+",
      label: "Marcas no Mercado",
      color: theme.palette.magic.purple, // Roxo
    },
  ];

  return (
    <Box
      ref={ref}
      sx={{
        py: 6,
        background: "linear-gradient(135deg, #FAFAFA 0%, #F0F0F0 100%)", // Gradiente de fundo neutro
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              mb: 6,
              fontWeight: 700,
              color: "primary.main",
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Números Mágicos ✨
          </Typography>
        </motion.div>

        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{
            flexWrap: { lg: "nowrap" },
            overflowX: { xs: "auto", lg: "visible" },
            pb: { xs: 2, lg: 0 },
            "&::-webkit-scrollbar": {
              height: "8px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#f1f1f1",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: theme.palette.primary.main,
              borderRadius: "4px",
            },
          }}
        >
          {stats.map((stat, index) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }}
              key={index}
              sx={{
                minWidth: { lg: "200px" },
                maxWidth: { lg: "220px" },
                flex: { lg: "0 0 auto" },
                width: { lg: "200px" },
                flexShrink: 0,
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Box
                  sx={{
                    textAlign: "center",
                    p: 3,
                    borderRadius: 3,
                    background: "white",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                    transition: "all 0.3s ease",
                    height: "280px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 16px 32px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: "50%",
                        backgroundColor: stat.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mx: "auto",
                        mb: 2,
                        boxShadow: `0 8px 24px ${stat.color}40`,
                      }}
                    >
                      <stat.icon sx={{ fontSize: 40, color: "white" }} />
                    </Box>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  >
                    <Typography
                      variant="h2"
                      sx={{
                        fontWeight: 700,
                        color: stat.color,
                        fontSize: { xs: "2rem", md: "3rem" },
                        mb: 1,
                      }}
                    >
                      {isInView ? (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                        >
                          {stat.number}
                          {stat.suffix === " anos" ? (
                            <span style={{ fontSize: "2.8rem" }}>
                              {stat.suffix}
                            </span>
                          ) : (
                            stat.suffix
                          )}
                        </motion.span>
                      ) : (
                        "0"
                      )}
                    </Typography>
                  </motion.div>

                  <Typography
                    variant="h6"
                    sx={{
                      color: "text.secondary",
                      fontWeight: 600,
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Stats;
