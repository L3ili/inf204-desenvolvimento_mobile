import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SQLiteProvider, useSQLiteContext } from "expo-sqlite";
// Funo de inicializacao das tabelas no disco
const iniciarBanco = async (db) => {
await db.execAsync("PRAGMA journal_mode = WAL;");
await db.execAsync(`
CREATE TABLE IF NOT EXISTS tarefas (
id INTEGER PRIMARY KEY AUTOINCREMENT,
descricao TEXT NOT NULL,
concluida INTEGER DEFAULT 0
);
`);
console.log("Base de Dados inicializada!");
};
export default function App() {
return (
// Engloba a aplicacao garantindo o acesso global
<SQLiteProvider databaseName="app-database.db" onInit={iniciarBanco}>
<EcraPrincipal />
</SQLiteProvider>
);
}