import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons';

const TelaMapa: React.FC <{ navigation: any }> = ({ navigation }) => {
  const [region, setRegion] = useState({
    latitude: -23.2648, // Coordenadas padrão
    longitude: -47.2992,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const [loading, setLoading] = useState(true); // Indicador de carregamento
  const [isSearching, setIsSearching] = useState(false); // Estado para simular busca por corridas

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        // Solicitar permissão de localização
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
          Alert.alert(
            'Permissão Negada',
            'Precisamos da permissão de localização para exibir sua posição no mapa.'
          );
          setLoading(false);
          return;
        }

        // Obter localização atual
        const location = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.High,
        });

        setRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });

        setLoading(false);
      } catch (error) {
        console.error('Erro ao obter localização:', error);
        Alert.alert('Erro', 'Não foi possível obter sua localização.');
        setLoading(false);
      }
    };

    fetchLocation();
  }, []);

  const handleStartPress = () => {
    // Simula a busca por corridas, ativando o estado de carregamento
    setIsSearching(true);
    
    // Simula um tempo de "procura" com um setTimeout
    setTimeout(() => {
      setIsSearching(false);
      Alert.alert('Atenção', 'Corridas encontradas!'); // Exemplo de mensagem após a "busca"
    }, 3000); // Simula 3 segundos de busca
  };

  if (loading) {
    // Exibir indicador de carregamento enquanto busca a localização
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6961FE" />
        <Text>Carregando localização...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Map */}
      <MapView
        style={styles.map}
        region={region}
        showsUserLocation={true}
        loadingEnabled={true}
      />

      {/* Floating Buttons */}
      <View style={styles.floatingButtons}>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.moneyButton}>
          <Text style={styles.moneyText}>R$ 0,00</Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.bottomInfo}>
        
        <TouchableOpacity 
          style={styles.startButton} 
          onPress={handleStartPress} 
          disabled={isSearching}
        >
          <Text style={styles.startButtonText}>
            {isSearching ? 'Procurando corridas...' : 'COMEÇAR'}
          </Text>
        </TouchableOpacity>

        <View style={styles.actionsNeeded}>
          <Ionicons name="alert-circle" size={18} color="red" />
          <Text style={styles.actionsText}>Ações necessárias (1)</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  floatingButtons: {
    position: 'absolute',
    top: 40,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuButton: {
    backgroundColor: '#6961FE',
    padding: 10,
    borderRadius: 25,
  },
  moneyButton: {
    backgroundColor: '#6961FE',
    padding: 10,
    borderRadius: 25,
  },
  moneyText: { color: 'white' },
  bottomInfo: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },
  errorMessage: {
    color: '#6961FE',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 20,
  },
  startButton: {
    backgroundColor: '#6961FE',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  startButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  actionsNeeded: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionsText: {
    color: 'red',
    fontSize: 14,
    marginLeft: 5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TelaMapa;
