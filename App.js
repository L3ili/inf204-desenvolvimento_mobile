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