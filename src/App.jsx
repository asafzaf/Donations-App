import "./App.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./router/router";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme";

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
