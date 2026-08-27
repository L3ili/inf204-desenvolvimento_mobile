import React from "react";
import { StyleSheet, Text, View } from "react-native";
export default function App() {
// Criando um Array de Objetos em JavaScript puro
const [ tarefas , setTarefas] = useState( [
{ id: 1, descricao: "Estudar ES6+", concluida: true },
{ id: 2, descricao: "Configurar ambiente Expo", concluida: true },
{ id: 3, descricao: "Entender o funcionamento do JSX", concluida: false },
{ id: 4, descricao: "Finalizar Roteiro de Pratica 02", concluida: false },
]);

const adicionarTarefa = () => {
 const novaTarefa = {
 id: tarefas.length + 1,
 descricao: "Nova tarefa",
 concluida: false,
 };
 setTarefas([...tarefas, novaTarefa]);
};

return (
<View style={styles.container}>
<Text style={styles.titulo}>Lista de Tarefas</Text>
{tarefas.map((tarefa) => (
<View key={tarefa.id} style={styles.card}>
<Text style={styles.textoTarefa}>
{/* Renderizacao Condicional: Se concluida exibe [OK] */}
{tarefa.concluida ? "[OK] " : "[PENDENTE] "}
{tarefa.descricao}
</Text>
</View>
))}
{/*Botão para adicionar tarefa*/}
<TouchableOpacity onPress={ adicionarTarefa } style = {styles.botao}>
 <Text style={styles.textoBotao}> Nova tarefa </Text>
</TouchableOpacity>
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
color: "#380474",
},
card: {
backgroundColor: "#7a4caf",
padding: 15,
borderRadius: 8,
marginBottom: 10,
shadowColor: "#000",
shadowOpacity: 0.1,
shadowRadius: 4,
elevation: 2,
},
textoTarefa: {
fontSize: 16,
color: "#111010",
},
 botao: {
 backgroundColor: "#7a4caf",
 padding: 10,
 borderRadius: 5,
 marginBottom: 10
 },
 textoBotao: {
 color: "#111010",
 fontWeight: "bold"
 }

});