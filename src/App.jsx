import React from "react";
import { Outlet } from "react-router-dom";
import Layout from "./components/Layout"; // Assure-toi que ce chemin est correct

const App = () => {
  return (
    <Layout>
      <Outlet /> {/* Le composant Outlet rendra les composants des routes */}
    </Layout>
  );
};

export default App;
