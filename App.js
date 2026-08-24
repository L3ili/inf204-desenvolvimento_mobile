import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from "react-native";
export default function App() {
const [nome, setNome] = useState("Joao Vitor");
const [seguindo, setSeguindo] = useState(true);

return (
<View style={styles.container}>
<View style={styles.cartao}>
<Image source={{ uri: "..." }} style={styles.avatar} />
<Text style={styles.nomeUsuario}>{nome}</Text>
<Text style={styles.profissao}>Engenheiro de Software</Text>
{/* Botao Customizado */}
<TouchableOpacity style={[styles.botao, seguindo ? styles.botaoDesativado : null]} activeOpacity={0.7} onPress={() => {
alert("Seguindo " + nome);
setSeguindo(!seguindo)
}}>            
<Text style={styles.textoBotao}>Seguir</Text>
</TouchableOpacity>
{/* Entrada de Texto */}
<TextInput
style={styles.input}
placeholder="Alterar nome..."
value={nome}
onChangeText={(texto) => setNome(texto)}
/>

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
},
cartao: {
backgroundColor: "#FFFFFF",
padding: 30,
borderRadius: 15,
alignItems: "center",
shadowColor: "#000",
shadowOpacity: 0.1,
shadowRadius: 10,
elevation: 5,
width: "80%",
},
avatar: {
width: 120,
height: 120,
borderRadius: 60,
marginBottom: 15,
},
nomeUsuario: {
fontSize: 22,
fontWeight: "bold",
color: "#14325A", // ProBlue
},
profissao: {
fontSize: 16,
color: "#505050", // ProGray
marginBottom: 20,
},
botao: {
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
input: {
width: "100%",
borderWidth: 1,
borderColor: "#CCC",
borderRadius: 8,
padding: 10,
textAlign: "center",
},
botaoDesativado: {
backgroundColor: "#999999", // ProGray
},
});