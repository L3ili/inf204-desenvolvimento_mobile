import React, { useState } from "react";
import { Text, View, Button,TouchableOpacity, StyleSheet } from "react-native";

export default function App() {
  const [contagem, setContagem] = useState(0);
  const decrementar = () => {
    if (contagem > 0) {
      setContagem(contagem - 1);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>"Contagem atual:"</Text>
      <Text style={styles.numero}>{contagem}</Text>
      
      <TouchableOpacity onPress={() => setContagem(contagem + 1)} style={styles.botao}>
        <Text style={styles.textoBotao}>Incrementar +1</Text>
        </TouchableOpacity>
        {/*Customização do botão incrementar +1*/}
  
      <TouchableOpacity onPress={() => setContagem(0)} style={styles.botao}>
        <Text style={styles.textoBotao}>Zerar</Text>
        </TouchableOpacity>
        {/*Customização do botão zerar*/}

      <TouchableOpacity onPress={decrementar} style={styles.botao}> 
        <Text style={styles.textoBotao}>Decrementar -1</Text>
        </TouchableOpacity>
        {/*Customização do botão decrementar -1*/}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0f7fa"
  },
  texto: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#380474"
  },
  titulo: {
    fontSize: 20,
    color: "#111010"
  },
  numero: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#7a4caf",
    marginBottom: 20
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
