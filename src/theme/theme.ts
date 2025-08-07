import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "Cormorant Garamond, Arial, sans-serif",

    // Setting the font for titles
    h1: { fontFamily: "Century, Arial, sans-serif" },
    h2: { fontFamily: "Century, Arial, sans-serif" },
    h3: { fontFamily: "Century, Arial, sans-serif" },
    h4: { fontFamily: "Century, Arial, sans-serif" },
    h5: { fontFamily: "Century, Arial, sans-serif" },
    h6: { fontFamily: "Century, Arial, sans-serif" },

    // Setting the font for small titles
    subtitle1: { fontFamily: "Cormorant Infant, Arial, sans-serif" },
    subtitle2: { fontFamily: "Cormorant Infant, Arial, sans-serif" },

    // Setting the font for body text
    body1: { fontFamily: "Cormorant Garamond, Arial, sans-serif" },
    body2: { fontFamily: "Cormorant Garamond, Arial, sans-serif" },
  },
});
