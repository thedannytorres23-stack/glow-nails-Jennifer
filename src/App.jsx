import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";



export default function App() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] =
    useState("Todas");

  return (
    <>
     

      <Routes>
        <Route
          path="/"
          element={
            <Home
              categoriaSeleccionada={categoriaSeleccionada}
              setCategoriaSeleccionada={setCategoriaSeleccionada}
            />
          }
        />

      </Routes>
    </>
  );
}