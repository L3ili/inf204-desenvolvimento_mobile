import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CHAVE_USUARIO = "@usuario";

// 1. Criacao do objeto de Contexto
export const AuthContext = createContext({});

// 2. O componente Provider que ira envelopar a aplicacao
export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null); // null = Visitante

  // Ao carregar a aplicacao, le o disco e restaura o login, se existir
  useEffect(() => {
    async function carregarUsuario() {
      try {
        const salvo = await AsyncStorage.getItem(CHAVE_USUARIO);
        if (salvo) {
          setUsuario(JSON.parse(salvo));
        }
      } catch (erro) {
        console.log("Erro ao ler usuario salvo:", erro);
      }
    }
    carregarUsuario();
  }, []);

  // Simulacao de um Login
  async function signIn(email, senha) {
    // Aqui aconteceria uma chamada de API (axios.post)
    const respostaAPI = { id: "123", nome: "Turma INF204", email: email };
    setUsuario(respostaAPI);
    try {
      await AsyncStorage.setItem(CHAVE_USUARIO, JSON.stringify(respostaAPI));
    } catch (erro) {
      console.log("Erro ao salvar usuario:", erro);
    }
  }

  // Simulacao de um Logout
  async function signOut() {
    setUsuario(null);
    try {
      await AsyncStorage.removeItem(CHAVE_USUARIO);
    } catch (erro) {
      console.log("Erro ao remover usuario:", erro);
    }
  }

  return (
    // Injetamos as propriedades e metodos no "canal" global
    // A conversao booleana (!!usuario) indica se ha alguem logado
    <AuthContext.Provider value={{ logado: !!usuario, usuario, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
