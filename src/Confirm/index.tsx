import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const ConfirmationScreen: React.FC = () => {
  const [code, setCode] = useState("");
  const navigation = useNavigation();

  const handleContinue = () => {
    navigation.navigate('TermosCondicoes');
    console.log("Código digitado:", code);
  };

  const handleGoBack = () =>{
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Digite os 4 números enviados para o seu celular
      </Text>
      <Text style={styles.title}>+551199624-2915</Text>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          keyboardType="numeric"
          maxLength={1}
          style={styles.input}
          onChangeText={(text) => setCode(text)}
        />
        <TextInput
          keyboardType="numeric"
          maxLength={1}
          style={styles.input}
          onChangeText={(text) => setCode(code + text)}
        />
        <TextInput
          keyboardType="numeric"
          maxLength={1}
          style={styles.input}
          onChangeText={(text) => setCode(code + text)}
        />
        <TextInput
          keyboardType="numeric"
          maxLength={1}
          style={styles.input}
          onChangeText={(text) => setCode(code + text)}
        />
      </View>
      <Text>Não recebi o código, aguarde para solicitar novamente (0:59)</Text>
      <TouchableOpacity onPress={handleContinue} style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Continuar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleGoBack} >
        <Text style={styles.backButton}>Voltar para tela anterior</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#6961FE",
  },
  input: {
    width: 30,
    height: 50,
    borderWidth: 1,
    borderColor: "#6961FE",
    backgroundColor:"#6961FE",
    color: "#FFF",
    borderRadius: 5,
    padding: 10,
    textAlign: "center",
    margin: 5,
  },
  continueButton: {
    backgroundColor: "#6961FE",
    padding: 15,
    width: 198,
   
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 15,
    marginTop: 25
  },
  backButton:{
    color: "#6961FE",
    alignItems: "center",
    marginBottom: 15,
    marginTop: 25
  },
  continueButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default ConfirmationScreen;
