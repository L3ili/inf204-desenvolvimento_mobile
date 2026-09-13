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
{/* Candidato A */}
<View style={styles.candidatoContainer}>
<Text style={styles.nomeCandidato}>Candidato A: {votosA} votos</Text>
<TouchableOpacity
style={styles.botaoVotar}
onPress={() => setVotosA(prev => prev + 1)}
>
<Text style={styles.textoBotao}>Votar em A</Text>
</TouchableOpacity>
</View>
{/* Candidato B */}
<View style={styles.candidatoContainer}>
<Text style={styles.nomeCandidato}>Candidato B: {votosB} votos</Text>
<TouchableOpacity
style={styles.botaoVotar}
onPress={() => setVotosB(prev => prev + 1)}
>
<Text style={styles.textoBotao}>Votar em B</Text>
</TouchableOpacity>
</View>
{/* Candidato C */}
<View style={styles.candidatoContainer}>
<Text style={styles.nomeCandidato}>Candidato C: {votosC} votos</Text>
<TouchableOpacity
style={styles.botaoVotar}
onPress={() => setVotosC(prev => prev + 1)}
>
<Text style={styles.textoBotao}>Votar em C</Text>
</TouchableOpacity>
</View>
</View>

);
}
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: "#F5F5F5",
justifyContent: "center",
alignItems: "center",
padding: 20
},
titulo: {
fontSize: 24,
fontWeight: "bold",
marginBottom: 30,
color: "#14325A", // ProBlue
},
botaoVotar: {
backgroundColor: "#7a4caf", // ProAccent
paddingVertical: 10,
paddingHorizontal: 30,
borderRadius: 8,
marginBottom: 20,
},
textoBotao: {
color: "#111010",
fontWeight: "bold",
fontSize: 16,
},
});