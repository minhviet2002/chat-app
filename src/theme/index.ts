import { experimental_extendTheme as extendTheme } from "@mui/material";

const themeExtend = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        mode: "light",
        primary: {
          main: "#000",
        },
        background: {
          defaultChannel: "white",
          paper: "rgba(255, 255, 255, 0.8)",
        },
      },
    },
    dark: {
      palette: {
        mode: "dark",
        primary: {
          main: "#fff",
        },
        background: {
          defaultChannel: "black",
          paper: "rgba(255, 255, 255, 0.2)",
        },
      },
    },
  },
});
export default themeExtend;
