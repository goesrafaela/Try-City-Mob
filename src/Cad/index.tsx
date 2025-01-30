import React, {useState} from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const CadScreen = () => {
  
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (email.trim() === '' || password.trim() === ''){
      Alert.alert('Erro', 'Todos os campos são obrigatórios!');
    }
    else{
      navigation.navigate('ConfirmationScreen');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Digite seu número de telefone ou email</Text>

      <TextInput
        style={styles.input}
        placeholder="Número de telefone ou email"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#FFF"
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#FFF"
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.continueButton}
        onPress={handleLogin}
      >
        <Text style={styles.continueButtonText}>Continuar</Text>
      </TouchableOpacity>

      <View style={styles.dividerContainer}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>Ou conecte com</Text>
        <View style={styles.dividerLine} />
      </View>

      <TouchableOpacity style={styles.socialButton}>
        <Ionicons name="logo-google" size={24} style={styles.icon} />
        <Text style={styles.socialButtonText}>Continuar com Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButtonApple}>
        <Ionicons
          name="logo-apple"
          size={24}
          color="white"
          style={styles.icon}
        />
        <Text style={styles.socialButtonText}>Continuar com Apple</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.findAccountButton}>
        <Text style={styles.findAccountText}>
          Ou busque uma conta existente
        </Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Você receberá um SMS, e-mail ou pelo WhatsApp.
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#6961FE",
  },
  input: {
    borderWidth: 1,
    borderColor: "#6961FE",
    backgroundColor: "#6961FE",
    color:"#FFF",
    borderRadius: 5,
    padding: 15,
    fontSize: 16,
    marginBottom: 20,
  },
  continueButton: {
    backgroundColor: "#6961FE",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  continueButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  dividerText: {
    marginHorizontal: 10,
    color: "#999",
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    backgroundColor: "#6961FE",
    borderColor: "#6961FE",
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  socialButtonApple: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    backgroundColor: "#000",

    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  socialButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
    textAlign: "center",
  },
  icon: {
    marginRight: 10,
  },
  appleButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000",

    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  findAccountButton: {
    alignItems: "center",
    marginBottom: 20,
  },
  findAccountText: {
    color: "#007BFF",
    fontSize: 16,
  },
  footerText: {
    textAlign: "center",
    color: "#999",
    fontSize: 14,
  },
});

export default CadScreen;
