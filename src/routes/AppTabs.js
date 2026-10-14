import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "../screens/Home";
import Configuracoes from "../screens/Configuracoes";

const Tab = createBottomTabNavigator();

export default function AppTabs() {
  return (
    <Tab.Navigator
      // Desafio extra: estilização das abas (cores e ícones)
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#6f4e37",
        tabBarInactiveTintColor: "#999999",
        tabBarIcon: ({ color, size, focused }) => {
          const nomeIcone =
            route.name === "Início"
              ? focused ? "home" : "home-outline"
              : focused ? "settings" : "settings-outline";
          return <Ionicons name={nomeIcone} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Início" component={Home} />
      <Tab.Screen name="Ajustes" component={Configuracoes} />
    </Tab.Navigator>
  );
}
