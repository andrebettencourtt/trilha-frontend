import { BrowserRouter } from "react-router-dom";
import "../css/global.css";
import ConfigRouter from "../router/router";

export function App() {
  return (
    <>
      <BrowserRouter>
        <ConfigRouter />
      </BrowserRouter>
    </>
  );
}
