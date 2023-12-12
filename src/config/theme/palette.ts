export default function palette(theme: "light" | "dark") {
  const light = {
    palette: {
      mode: "light",
      primary: {
        main: "#000",
      },
      background: {
        default: "rgba(255, 255, 255, .8)",
      },
    },
  };
  const dark = {
    palette: {
      mode: "dark",
      primary: {
        main: "#fff",
      },
      background: {
        default: "rgba(255, 255, 255, 1)",
      },
    },
  };
  return theme === "light" ? light : dark;
}
