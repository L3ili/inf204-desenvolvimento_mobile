import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
export default function JogoDaVelha() {
const [tabuleiro, setTabuleiro] = useState(Array(9).fill(null));
const [jogador, setJogador] = useState("X");
const jogada = (i) => {
    if (tabuleiro[i] === null) {
      const novoTabuleiro = [...tabuleiro];
      novoTabuleiro[i] = jogador;
      setTabuleiro(novoTabuleiro);
      setJogador(jogador === "X" ? "O" : "X");
    }
};
return (
    <View style={styles.container}>
        <Text>Jogo da Velha</Text> 
    <View style={styles.linha}>  
    <TouchableOpacity style={styles.botao} onPress={() => jogada(0)}>
        <Text style={styles.textoBotao}>{tabuleiro[0]}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.botao} onPress={() => jogada(1)}>
        <Text style={styles.textoBotao}>{tabuleiro[1]}</Text>
    </TouchableOpacity>         
    <TouchableOpacity style={styles.botao} onPress={() => jogada(2)}>
        <Text style={styles.textoBotao}>{tabuleiro[2]}</Text>
    </TouchableOpacity>
    </View>
    <View style={styles.linha}>
    <TouchableOpacity style={styles.botao} onPress={() => jogada(3)}>
        <Text style={styles.textoBotao}>{tabuleiro[3]}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.botao} onPress={() => jogada(4)}>
        <Text style={styles.textoBotao}>{tabuleiro[4]}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.botao} onPress={() => jogada(5)}>
        <Text style={styles.textoBotao}>{tabuleiro[5]}</Text>
    </TouchableOpacity>
    </View>
    <View style={styles.linha}>
    <TouchableOpacity style={styles.botao} onPress={() => jogada(6)}>
        <Text style={styles.textoBotao}>{tabuleiro[6]}</Text>       
    </TouchableOpacity>
    <TouchableOpacity style={styles.botao} onPress={() => jogada(7)}>
        <Text style={styles.textoBotao}>{tabuleiro[7]}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.botao} onPress={() => jogada(8)}>
        <Text style={styles.textoBotao}>{tabuleiro[8]}</Text>
    </TouchableOpacity>
    </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: "center",
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
  },
  linha: {
  flexDirection: "row",
 },
});