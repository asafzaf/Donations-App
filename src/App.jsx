import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/router";

function App() {
  return (
    <div className="root">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
