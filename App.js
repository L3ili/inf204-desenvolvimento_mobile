import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
export default function UrnaEletronica() {
// Criando estados independentes para cada candidato
const [votosA, setVotosA] = useState(0);
const [votosB, setVotosB] = useState(0);
const [votosC, setVotosC] = useState(0);
return (
<View style={styles.container}>
<Text style={styles.titulo}>Painel de Votação</Text>
{/* Os botoes serao adicionados no Passo 2 */}
</View>
);
}
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: "#F5F5F5",
justifyContent: "center",
alignItems: "center",
padding: 20,
},
titulo: {
fontSize: 24,
fontWeight: "bold",
marginBottom: 30,
color: "#14325A", // ProBlue
},
});