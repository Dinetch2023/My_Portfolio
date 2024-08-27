import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Parcours from "../src/pages/Parcours";
import Projets from "../src/pages/Projets";
import Competences from "../src/pages/Competences.jsx"; // Chemin corrigé
import Atouts from "./pages/Atouts.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "atouts",
        element: <Atouts />,
      },
      {
        path: "parcours",
        element: <Parcours />,
      },
      {
        path: "projets",
        element: <Projets />,
      },
      {
        path: "competences",
        element: <Competences />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
