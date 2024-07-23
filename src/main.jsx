import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Parcours from "./pages/Parcours";
import Projets from "./pages/Projets";
import Technologies from "./pages/Technologies";
import Contact from "./pages/Contact";
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
        path: "parcours",
        element: <Parcours />,
      },
      {
        path: "projets",
        element: <Projets />,
      },
      {
        path: "technologies",
        element: <Technologies />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
