import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: `'Lexend Deca', sans-serif`,
  },
  palette: {
    primary: {
      main: "#FF6B9D", // Rosa brilhante da letra M
      light: "#FF8FB1",
      dark: "#E91E63",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FFA726", // Laranja da letra A
      light: "#FFB74D",
      dark: "#F57C00",
      contrastText: "#FFFFFF",
    },
    success: {
      main: "#4CAF50", // Verde da letra G
      light: "#81C784",
      dark: "#388E3C",
      contrastText: "#FFFFFF",
    },
    info: {
      main: "#2196F3", // Azul da letra C
      light: "#64B5F6",
      dark: "#1976D2",
      contrastText: "#FFFFFF",
    },
    warning: {
      main: "#FFC107", // Amarelo das estrelas
      light: "#FFD54F",
      dark: "#FF8F00",
      contrastText: "#000000",
    },
    error: {
      main: "#F44336",
      light: "#E57373",
      dark: "#D32F2F",
      contrastText: "#FFFFFF",
    },
    // Cores de acento baseadas na logo
    magic: {
      pink: "#FF6B9D", // Rosa da letra M
      orange: "#FFA726", // Laranja da letra A
      yellow: "#FFC107", // Amarelo das estrelas
      green: "#4CAF50", // Verde da letra G
      teal: "#009688", // Teal da letra I
      blue: "#2196F3", // Azul da letra C
      darkBlue: "#1976D2", // Azul escuro do chapéu
      purple: "#9C27B0", // Magenta escuro
      brown: "#795548", // Marrom para figuras de ação
      whatsapp: "#25D366", // Verde do WhatsApp
      whatsappDark: "#128C7E", // Verde escuro do WhatsApp
      white: "#FFFFFF",
      black: "#000000",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FAFAFA",
      dark: "#121212",
    },
    text: {
      primary: "#212121",
      secondary: "#757575",
      disabled: "#BDBDBD",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: "none",
          fontWeight: 600,
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          "&:hover": {
            boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
          },
        },
        contained: {
          background: "linear-gradient(135deg, #FF6B9D 0%, #FFA726 100%)",
          "&:hover": {
            background: "linear-gradient(135deg, #E91E63 0%, #F57C00 100%)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
          "&:hover": {
            boxShadow: "0 12px 32px rgba(0,0,0,0.18)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "linear-gradient(135deg, #FF6B9D 0%, #2196F3 100%)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        },
      },
    },
  },
});

export default theme;
