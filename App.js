import React from "react";
import { StyleSheet, Text, View } from "react-native";
export default function App() {
// Criando um Array de Objetos em JavaScript puro
const tarefas = [
{ id: 1, descricao: "Estudar ES6+", concluida: true },
{ id: 2, descricao: "Configurar ambiente Expo", concluida: true },
{ id: 3, descricao: "Entender o funcionamento do JSX", concluida: false },
{ id: 4, descricao: "Finalizar Roteiro de Pratica 02", concluida: false },
];
return (
<View style={styles.container}>
<Text style={styles.titulo}>Lista de Tarefas</Text>
{/* A lista sera renderizada aqui no Passo 3 */}
</View>
);
}
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: "#f5f5f5",
paddingTop: 50,
paddingHorizontal: 20,
},
titulo: {
fontSize: 24,
fontWeight: "bold",
marginBottom: 20,
color: "#20325a",
},
});