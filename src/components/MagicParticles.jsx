import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import StarIcon from "@mui/icons-material/Star";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SparklesIcon from "@mui/icons-material/AutoAwesome";

const MagicParticles = () => {
  const particles = [
    { id: 1, icon: StarIcon, color: "#FFC107", delay: 0, duration: 3 },
    { id: 2, icon: AutoAwesomeIcon, color: "#2196F3", delay: 0.5, duration: 4 },
    { id: 3, icon: FavoriteIcon, color: "#FF6B9D", delay: 1, duration: 2.5 },
    { id: 4, icon: SparklesIcon, color: "#4CAF50", delay: 1.5, duration: 3.5 },
    { id: 5, icon: StarIcon, color: "#FFA726", delay: 2, duration: 3 },
    {
      id: 6,
      icon: AutoAwesomeIcon,
      color: "#9C27B0",
      delay: 2.5,
      duration: 4.5,
    },
    { id: 7, icon: FavoriteIcon, color: "#009688", delay: 3, duration: 2.8 },
    { id: 8, icon: SparklesIcon, color: "#FF6B9D", delay: 3.5, duration: 3.2 },
  ];

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 1,
      }}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            opacity: 0,
            scale: 0,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            rotate: [0, 360],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            color: particle.color,
          }}
        >
          <particle.icon
            sx={{
              fontSize: { xs: 20, md: 30 },
              filter: "drop-shadow(0 0 10px currentColor)",
            }}
          />
        </motion.div>
      ))}
    </Box>
  );
};

export default MagicParticles;
