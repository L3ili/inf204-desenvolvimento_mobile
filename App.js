import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, ActivityIndicator, TextInput, Alert, TouchableOpacity } from "react-native";
import api from "./src/services/api";

export default function App() {
  const [utilizadores, setUtilizadores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");

  const formulario = async () => {
    try {
      await api.post("/users", { name: nome, email: email });
      Alert.alert("Sucesso", "Utilizador adicionado com sucesso!");
      setNome("");
      setEmail("");
      buscarDados(); 
    } catch (erro) {
      Alert.alert("Erro", "Erro ao adicionar utilizador.");
      console.error("Erro ao adicionar utilizador:", erro.message);
    }
  };
  const buscarDados = async () => {
    setLoading(true);
    try {
      const resposta = await api.get("/users");
      setUtilizadores(resposta.data);
    } catch (erro) {
      Alert.alert("Erro", "Erro ao buscar dados."); 
      console.error("Erro ao buscar dados:", erro.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    buscarDados();
  }, []);

  if (loading && utilizadores.length === 0) {
    return (
      <View style={styles.centro}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>A carregar utilizadores...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Digite o email: "
        value={email}
        onChangeText={setEmail}
        style={styles.textinput}
      />
      <TextInput
        placeholder="Digite o nome: "
        value={nome}
        onChangeText={setNome}
        style={styles.textinput}
      />
      <TouchableOpacity style={styles.botao} onPress={formulario}>
        <Text style={styles.botaoTexto}>Adicionar Utilizador</Text>
      </TouchableOpacity>
      <Text style={styles.titulo}>Lista de Utilizadores</Text>
      <FlatList
        data={utilizadores}
        keyExtractor={(item) => item.id.toString()}
        refreshing={loading}
        onRefresh={buscarDados}
        renderItem={({ item }) => (
          <View style={styles.cartao}>
            <Text style={styles.nome}>{item.name}</Text>
            <Text style={styles.email}>{item.email}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF", paddingTop: 50, paddingHorizontal: 20 },
  centro: { flex: 1, justifyContent: "center", alignItems: "center" },
  titulo: { fontSize: 24, fontWeight: "bold", marginBottom: 20, color: "#7a4caf" },
  cartao: { backgroundColor: "#c5aae4", padding: 15, marginBottom: 10, borderRadius: 8, elevation: 2 },
  nome: { fontSize: 18, fontWeight: "bold" },
  email: { color: "#666", marginTop: 5 },
  textinput: { borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 10, marginBottom: 10 },
  botao: { backgroundColor: "#7a4caf", padding: 10, borderRadius: 8, alignItems: "center", marginTop: 10 },
  botaoTexto: { color: "#FFF", fontWeight: "bold" },
});