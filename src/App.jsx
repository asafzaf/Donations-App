import "./App.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./router/router";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2D9596",
    },
    secondary: {
      main: "#E9C46A",
    },
  },
});

function App() {
  return (
    <div className="root">
      <ThemeProvider theme={theme}>
        <RouterProvider router={Routes} />
      </ThemeProvider>
    </div>
  );
}

export default App;
