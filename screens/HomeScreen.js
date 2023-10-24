import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Animated,
  Image
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView from 'react-native-maps';
import mapStyle from '../components/homepage/mapStyle.json';
import LayoutHome from '../components/homepage/LayoutHome';
import NewTravel from '../components/homepage/NewTravel';

const { width, height } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalY] = useState(new Animated.Value(height)); // affichage du bouton ok, quand fermé

  const handleButtonPress = () => {
    setIsOpen(!isOpen);
    isOpen ? closeModal() : openModal();
  };

  const openModal = () => {
    Animated.timing(modalY, {
      duration: 300,
      toValue: 60, //jouer avec les tailles ici
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(modalY, {
      duration: 300,
      toValue: height + 10, // affichage du bouton ok, quand fermé
      useNativeDriver: true,
    }).start();
  };

  const ButtonLarge = () => {
    return (
      <TouchableOpacity style={styles.buttonLarge}>
        <Text>Mon Bouton</Text>
      </TouchableOpacity>
    );
  }; // ajouter l'action

  return (
    <View style={{ flex: 1 }}>
      <MapView
        initialRegion={{
          latitude: 30,
          longitude: 10,
          latitudeDelta: 60,
          longitudeDelta: 60,
        }}
        style={{ flex: 1 }}
        customMapStyle={mapStyle}
      />

      <SafeAreaView style={{ ...styles.menu }}>
        {
          <Animated.View
            style={{
              ...styles.modal,
              backgroundColor: `${isOpen ? '#F2DDC2' : '#D8725B'}`,
              transform: [{ translateY: modalY }],
            }}
          >
            {isOpen && <View style={{backgroundColor: '#D8725B', height: 50, width: '100%'}} />}
            <TouchableOpacity
              onPress={handleButtonPress}
              style={styles.button}
              activeOpacity={0.8}
            >
              <Image source={require('../assets/compass.png')} alt="compass" style={{height: 48, width: 48 }} />
            </TouchableOpacity>
            <LayoutHome children={<NewTravel />}/>
          </Animated.View>
        }
      </SafeAreaView>
    </View>
  );
}

// DESIGN A REVOIR
const styles = StyleSheet.create({
  menu: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    padding: 0,
    border: 0,
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 60,
    borderWidth: 10,
    borderColor: '#D8725B',
    backgroundColor: '#073141',
    justifyContent: 'center',
    alignItems: 'center',
    top: -32
  },
  modal: {
    width: width,
    height: height - 15,
    alignItems: 'center',
    backgroundColor: '#F2DDC2',
    position: 'absolute',
    bottom: 60,
    left: 0,
  },
  buttonLarge: {},
});
