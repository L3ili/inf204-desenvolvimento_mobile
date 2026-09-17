import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
// Array estatico fora do componente para no ser recriado a cada render
const contatosIniciais = [
{ id: "1", nome: "Alice Silva", telefone: "(31) 99999-1111" },
{ id: "2", nome: "Bruno Costa", telefone: "(31) 98888-2222" },
{ id: "3", nome: "Carlos Souza", telefone: "(31) 97777-3333" },
{ id: "4", nome: "Diana Rocha", telefone: "(31) 96666-4444" },
{ id: "5", nome: "Eduardo Lima", telefone: "(31) 95555-5555" },
{ id: "6", nome: "Fernanda Alves", telefone: "(31) 94444-6666" },
{ id: "7", nome: "Gabriel Mendes", telefone: "(31) 93333-7777" },
// Desafio para a dupla: Preencham ate ter pelo menos 15 contatos!
];
export default function Agenda() {
    const renderizarContato = ({ item }) => (
<View style={styles.cardContato}>
<Text style={styles.nomeText}>{item.nome}</Text>
<Text style={styles.telefoneText}>{item.telefone}</Text>
</View>
);

const renderizarSeparador = () => (
<View style={styles.separador} />
);
const renderizarVazio = () => (
<View style={styles.containerVazio}>
<Text style={styles.textoVazio}>Agenda Vazia.</Text>
</View>
);   

const [contatos, setContatos] = useState(contatosIniciais);
return (
<View style={styles.container}>
<View style={styles.cabecalho}>
<Text style={styles.titulo}>Minha Agenda</Text>
<TouchableOpacity style={styles.botaoLimpar} onPress={() => setContatos
([])}>
<Text style={styles.textoBotao}>Limpar Tudo</Text>
</TouchableOpacity>
</View>
{/* A FlatList entrara aqui no Passo 4 */}
</View>
);
}
