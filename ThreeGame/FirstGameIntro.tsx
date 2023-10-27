import React, { useEffect, useState } from 'react';
import { View, Dimensions, StyleSheet, Image, Text } from 'react-native';
import { useNavigation, NavigationProp, useFocusEffect } from '@react-navigation/native';
import { orangeC, purpleC, whiteC } from '../files/Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get('window');

const margin = width * 0.02;

const FirstGameIntro = () => {


  type RootStackParamList = {
    FirstGameScreen: undefined; // Define your navigation stack here
  };
  type PlayButtonNavigationProp = NavigationProp<RootStackParamList, 'FirstGameScreen'>;

  const navigation = useNavigation<PlayButtonNavigationProp>();


  useFocusEffect(() => {
    loadHighScore();
  });
  useEffect(() => {
    loadHighScore();
  }, []);
  const [highScore, setHighScore] = useState<number>(0);
  const loadHighScore = async () => {
    try {
      const storedScore = await AsyncStorage.getItem('FirstGameScore');
      const parsedScore = parseInt(storedScore || '0');
      if (!isNaN(parsedScore)) {
        setHighScore(parsedScore);
      }
    } catch (error) {
    }
  };

  
  return (
    <View
      style={{
        height: width * 0.44,
        width: width * 0.96,
        backgroundColor: whiteC,
        alignSelf: 'center',
        marginTop: width * 0.03,
        borderRadius: 15,
        flexDirection: 'row',
      }}
    >
      <View style={styles.Left}>
        <View style={{ ...styles.imageRow, marginTop: margin, paddingLeft: margin }}>
          <Image
            source={require('../assets/NorthAmerica.png')}
            resizeMode="stretch"
            style={styles.imageContainer}
          />
          <Image
            source={require('../assets/Europe.jpg')}
            resizeMode="stretch"
            style={styles.imageContainer}
          />
          <Image
            source={require('../assets/Asia.png')}
            resizeMode="stretch"
            style={styles.imageContainer}
          />
        </View>
        <View style={{ ...styles.imageRow, marginTop: margin, paddingLeft: margin }}>
          <Image
            source={require('../assets/SouthAmerica.png')}
            resizeMode="stretch"
            style={styles.imageContainer}
          />
          <Image
            source={require('../assets/Africa.png')}
            resizeMode="stretch"
            style={styles.imageContainer}
          />
          <Image
            source={require('../assets/Oceania.png')}
            resizeMode="stretch"
            style={styles.imageContainer}
          />
        </View>
      </View>
      <View style={{ ...styles.Right, padding: margin }}>
        <View style={styles.InsideRight}>
          <Text style={{fontSize: RFValue(20), fontWeight: 'bold', color: whiteC }}>{highScore}/196</Text>
        </View>

         <TouchableOpacity onPress={() => navigation.navigate('FirstGameScreen')} style={styles.InsideRightBottom}>
          <Text style={{fontSize: RFValue(24), fontWeight: 'bold', color: whiteC }}>Play !</Text>
        </TouchableOpacity> 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Left: {
    flex: 21,
  },
  Right: {
    flex: 10,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  InsideRight: {
    width: '100%',
    height: width * 0.14,
    backgroundColor: orangeC,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageContainer: {
    width: width * 0.19,
    height: width * 0.19,
    borderRadius: 5,
    borderWidth: 2,
  },
  InsideRightBottom: {
    width: '100%',
    marginTop: width * 0.02,
    height: width * 0.24,
    backgroundColor: purpleC,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});

export default FirstGameIntro;


