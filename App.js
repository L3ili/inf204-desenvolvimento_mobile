import React from "react";
import { AuthProvider } from "./src/contexts/AuthContext";
import { ThemeProvider } from "./src/contexts/TemaContext";
import Rotas from "./src/routes";

export default function App() {
  // Providers aninhados: o ThemeProvider envolve o AuthProvider
  return (
    <ThemeProvider>
      <AuthProvider>
        <Rotas />
      </AuthProvider>
    </ThemeProvider>
  );
}
