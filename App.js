import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
export default function App() {
return (
<View style={styles.container}>
<View style={styles.cartao}>
{/* Imagem Remota: Obrigatorio definir width e height no estilo */}
<Image
source={{ uri: "..." }}
style={styles.avatar}
/>
<Text style={styles.nomeUsuario}>Joao Vitor</Text>
<Text style={styles.profissao}>Engenheiro de Software</Text>
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
}
});