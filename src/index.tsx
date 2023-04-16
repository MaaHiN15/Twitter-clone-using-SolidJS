import { render } from "solid-js/web";
import App from "./app";
import "./index.css";
import { Router } from "@solidjs/router";

render( () =>
    <Router>
      <App />
    </Router>,
  document.getElementById("root")!
);
