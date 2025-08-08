import React from "react";
import { Fab, Zoom } from "@mui/material";
import { motion } from "framer-motion";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const FloatingWhatsApp = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de conhecer os brinquedos da Magic Brinquedos! 🎈✨"
    );
    window.open(`https://wa.me/5511915962801?text=${message}`, "_blank");
  };

  return (
    <Zoom in={true}>
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 1000,
        }}
      >
        <Fab
          color="primary"
          aria-label="WhatsApp"
          onClick={handleWhatsApp}
          sx={{
            backgroundColor: "#25D366",
            color: "white",
            width: 60,
            height: 60,
            boxShadow: "0 8px 24px rgba(37, 211, 102, 0.4)",
            "&:hover": {
              backgroundColor: "#128C7E",
              transform: "scale(1.1)",
              boxShadow: "0 12px 32px rgba(37, 211, 102, 0.6)",
            },
            transition: "all 0.3s ease",
          }}
        >
          <WhatsAppIcon sx={{ fontSize: 30 }} />
        </Fab>
      </motion.div>
    </Zoom>
  );
};

export default FloatingWhatsApp;
