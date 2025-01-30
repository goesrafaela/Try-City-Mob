import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";


const TermosCondicoes: React.FC = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>TriCityMob</Text>

      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Termos e Condições</Text>
        <Text style={styles.description}>
          Leia os documentos a seguir e confirme que você concorda com eles.
        </Text>
        <TouchableOpacity style={styles.termsRow}>
          <Text style={styles.linkText}>Termos do serviço em geral</Text>
          <Text style={styles.arrow}>&gt;</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TelaMapa')}>
        <Text style={styles.buttonText}>Concordo com os termos</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6961FE',
    marginBottom: 20,
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#6961FE',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#6961FE',
    textAlign: 'center',
    marginBottom: 20,
  },
  termsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    paddingBottom: 10,
    marginBottom: 30,
  },
  linkText: {
    fontSize: 14,
    color: '#6961FE',
  },
  arrow: {
    fontSize: 18,
    color: '#6961FE',
  },
  button: {
    backgroundColor: '#6961FE',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default TermosCondicoes;
