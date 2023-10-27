import React, { useState, useEffect } from 'react';
import { View, Dimensions, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useFocusEffect, NavigationProp } from '@react-navigation/native';
import { purpleC, grayC, blackC, whiteC, blueC, } from '../files/Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { height, width } = Dimensions.get('window');

type RootStackParamList = {
  HomeGame: undefined; 
};

type MainGameIntroNavigationProp = NavigationProp<RootStackParamList, 'HomeGame'>;




const MainGameIntro = () => {

  const [highScore, setHighScore] = useState<number>(0);

  const navigation = useNavigation<MainGameIntroNavigationProp>();

  useFocusEffect(() => {
    loadHighScore();
  });
  useEffect(() => {
    loadHighScore();
  }, []);

  const loadHighScore = async () => {
    try {
      const storedScore = await AsyncStorage.getItem('mainScore');
      const parsedScore = parseInt(storedScore || '0');
      if (!isNaN(parsedScore)) {
        setHighScore(parsedScore);
      }
    } catch (error) {
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.mainBox}>
<View style={styles.insideGame}> 
<View style={styles.highScoreText}>
           <Text style={{fontSize: RFValue(34),fontFamily: 'bold',
fontWeight: 'bold', color: blackC,}}>High Score : {highScore}</Text> 
            </View>
        <View style={styles.insideGameImage}>
        <Image source={require('../assets/World.jpg')} resizeMode="stretch" style={{ width: '100%', height: '100%', }} />
        </View>
        <View style={styles.insideGameButton}>
          <TouchableOpacity onPress={() => navigation.navigate('HomeGame')} style={styles.PlayButton}>
            <Text style={styles.PlayText}>Play !</Text></TouchableOpacity> 
        </View>
        <View style={styles.insideGameText}>
          <Text style={{fontSize: RFValue(8),paddingLeft: 10, paddingRight: 10, color: blackC,}}>
            This is how you play the game by swiping left on the image of country which is 
            the image of country which is furtherst in the direction its asking.</Text> 
            </View> 
</View>
      </View>
      </View>
  );
};



const styles = StyleSheet.create({
  mainBox: {
    alignSelf: 'center',
    width: width - height * 0.05,
    flex: 1,
    borderRadius: 10,
    marginBottom: height * 0.13,
    marginTop: height * 0.03,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: blueC, 
  },
  insideGame: {
    borderRadius: 10,
    height: '100%',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
backgroundColor: whiteC,
},
insideGameImage:{
  width: width * 0.82,
  height: height * 0.3,
},
insideGameButton:{
  width: width * 0.8,
  height: height * 0.06,
  alignItems: 'center',
},
insideGameText:{
  width: width * 0.82,
  height: height * 0.07,
  backgroundColor: whiteC,
borderRadius: 6,
alignSelf: 'center', 
shadowColor: blackC,
shadowOffset: {
width: 0,
height: 4,
  },
  shadowOpacity: 0.4,
shadowRadius: 6,
elevation: 5,
justifyContent: 'center', 
    alignItems: 'center',
},
PlayButton:{
  height: '100%',
  backgroundColor: purpleC,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 10,
alignSelf: 'center', 
shadowColor: blackC,
shadowOffset: {
width: 0,
height: 4,
  },
  shadowOpacity: 0.4,
shadowRadius: 6,
elevation: 5,
},
PlayText:{
  color: whiteC,
  fontSize: RFValue(24), 
  paddingLeft: 30,
  paddingRight: 30,
  fontFamily: 'bold',
fontWeight: 'bold',
alignItems: 'center',
    justifyContent: 'center',
},
highScoreText:{
  height: height * 0.06,
  width: '100%',
  alignItems: 'center',
},
});

export default MainGameIntro;