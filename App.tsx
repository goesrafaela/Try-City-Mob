import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text, StyleSheet } from "react-native";

import CadScreen from "./src/Cad";
import ConfirmationScreen from "./src/Confirm";
import TermosCondicoes from "./src/Terms";
import TelaMapa from "./src/Maps";

// Menu Lateral
const MenuContent = () => (
  <View style={styles.menuContainer}>
    
    <View style={styles.menuOptions}>
      <Text style={styles.menuOption}>Caixa Principal</Text>
      <Text style={styles.menuOption}>Indicações</Text>
      <Text style={styles.menuOption}>Ganhos do motorista</Text>
      <Text style={styles.menuOption}>Sua carteira</Text>
      <Text style={styles.menuOption}>Conta</Text>
    </View>
    <View style={styles.menuFooter}>
      <Text style={styles.menuFooterText}>Ajuda</Text>
      <Text style={styles.menuFooterText}>Informação</Text>
    </View>
  </View>
);

// Navegadores
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Drawer Navigator para TelaMapa
function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={() => <MenuContent />}>
      <Drawer.Screen name="Mapa" component={TelaMapa} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
}

// Aplicação Principal
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CadScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="CadScreen" component={CadScreen} />
        <Stack.Screen name="ConfirmationScreen" component={ConfirmationScreen} />
        <Stack.Screen name="TermosCondicoes" component={TermosCondicoes} />
        <Stack.Screen name="TelaMapa" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Estilos
const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  menuHeader: {
    alignItems: "center",
    marginBottom: 20,
  },
  menuUserName: {
    color: "#6961FE",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  menuOptions: {
    flex: 1,
    justifyContent: "center",
  },
  menuOption: {
    color: "#6961FE",
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 10,
    textAlign: "center",
  },
  menuFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  menuFooterText: {
    color: "#6961FE",
    fontSize: 14,
  },
});
