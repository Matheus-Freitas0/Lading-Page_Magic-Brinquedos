import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Container,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import InstagramIcon from "@mui/icons-material/Instagram";

const InstagramFeed = () => {
  const instagramPosts = [
    {
      id: 1,
      image: "/assets/instagramEquipe.webp",
      likes: 124,
      comments: 8,
      caption: "✨️Chegamos na trend...",
    },
    {
      id: 2,
      image: "/assets/instagramGirababy.jpg",
      likes: 289,
      comments: 35,
      caption: "🧸 Desenvolvimento e Diversão com o Girababy Didático! 🧸",
    },
    {
      id: 3,
      image: "/assets/instagramDinoPintura.jpg",
      likes: 156,
      comments: 12,
      caption:
        "🦖🎨 Prepare-se para muita diversão e criatividade com o Super Kit Pintura Dinossauro! 🎨🦕",
    },
    {
      id: 4,
      image: "/assets/instagramJogosPedagoga.jpg",
      likes: 203,
      comments: 15,
      caption:
        "📚✨ O pedagogo é aquele que ensina com amor, escuta com o coração e guia com propósito.",
    },
    {
      id: 5,
      image: "/assets/InstagramDIaMaes.webp",
      likes: 167,
      comments: 9,
      caption:
        " Existem muitos jeitos de ser mãe... E todas têm algo em comum: Um amor que transforma 💖",
    },
    {
      id: 6,
      image: "/assets/instagramDiaLivro.jpg",
      likes: 98,
      comments: 6,
      caption: "📚✨ Ler é brincar com a imaginação!",
    },
  ];

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/magicbrinquedosoficial", "_blank");
  };

  return (
    <Box sx={{ py: 8, backgroundColor: "white" }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: 700,
                color: "primary.main",
                mb: 2,
              }}
            >
              Siga-nos no Instagram 📸
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "text.secondary",
                mb: 3,
              }}
            >
              @magicbrinquedosoficial
            </Typography>
            <IconButton
              onClick={handleInstagramClick}
              sx={{
                backgroundColor: "#E4405F",
                color: "white",
                "&:hover": {
                  backgroundColor: "#C13584",
                },
                p: 2,
              }}
            >
              <InstagramIcon sx={{ fontSize: 30 }} />
            </IconButton>
          </Box>
        </motion.div>

        <Grid
          container
          spacing={{ xs: 2, sm: 3, md: 3 }}
          justifyContent="center"
          alignItems="stretch"
        >
          {instagramPosts.map((post, index) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 4, lg: 4 }}
              key={post.id}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ width: "100%", maxWidth: "400px" }}
              >
                <Card
                  onClick={handleInstagramClick}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    width: "100%",
                    maxWidth: { xs: "350px", sm: "400px" },
                    minHeight: { xs: "400px", sm: "420px", md: "450px" },
                    mx: "auto",
                    "&:hover": {
                      transform: "scale(1.02)",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={post.image}
                    alt={`Post ${post.id}`}
                    sx={{
                      height: { xs: "280px", sm: "300px", md: "320px" },
                      objectFit: "cover",
                      objectPosition: "center",
                      width: "100%",
                      flex: "0 0 auto",
                    }}
                  />
                  <CardContent
                    sx={{
                      p: { xs: 2, sm: 2.5 },
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      minHeight: { xs: "100px", sm: "110px" },
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        mb: 2,
                        fontSize: { xs: "0.85rem", sm: "0.9rem" },
                        lineHeight: 1.4,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {post.caption}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        mt: "auto",
                      }}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                      >
                        <FavoriteIcon sx={{ fontSize: 16, color: "#E4405F" }} />
                        <Typography
                          variant="caption"
                          sx={{ color: "text.secondary", fontWeight: 500 }}
                        >
                          {post.likes}
                        </Typography>
                      </Box>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                      >
                        <ChatBubbleOutlineIcon
                          sx={{ fontSize: 16, color: "text.secondary" }}
                        />
                        <Typography
                          variant="caption"
                          sx={{ color: "text.secondary", fontWeight: 500 }}
                        >
                          {post.comments}
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

export default InstagramFeed;
