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
      image: "https://via.placeholder.com/300x300/FF6B9D/FFFFFF?text=Post+1",
      likes: 124,
      comments: 8,
      caption: "Boneca mágica nova chegou! ✨",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300x300/FFA726/FFFFFF?text=Post+2",
      likes: 89,
      comments: 5,
      caption: "Carrinhos turbo em promoção! 🏎️",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300x300/4CAF50/FFFFFF?text=Post+3",
      likes: 156,
      comments: 12,
      caption: "Jogos educativos para todas as idades 📚",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/300x300/2196F3/FFFFFF?text=Post+4",
      likes: 203,
      comments: 15,
      caption: "Pelúcias fofas para presentear! 🧸",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/300x300/9C27B0/FFFFFF?text=Post+5",
      likes: 167,
      comments: 9,
      caption: "Robôs inteligentes para crianças tech! 🤖",
    },
    {
      id: 6,
      image: "https://via.placeholder.com/300x300/009688/FFFFFF?text=Post+6",
      likes: 98,
      comments: 6,
      caption: "Kits de criatividade para artistas mirins! 🎨",
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

        <Grid container spacing={2}>
          {instagramPosts.map((post, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={post.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    borderRadius: 2,
                    overflow: "hidden",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="250"
                    image={post.image}
                    alt={`Post ${post.id}`}
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent sx={{ p: 2 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        mb: 1,
                        fontSize: "0.9rem",
                      }}
                    >
                      {post.caption}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                      >
                        <FavoriteIcon sx={{ fontSize: 16, color: "#E4405F" }} />
                        <Typography
                          variant="caption"
                          sx={{ color: "text.secondary" }}
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
                          sx={{ color: "text.secondary" }}
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
