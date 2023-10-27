import React, { useState, useEffect } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { View,  Dimensions, ScrollView, StyleSheet } from 'react-native';
// import FirstGameCard from "./FirstGameCard"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { purpleC, grayC, blackC, whiteC, greenC, orangeC, redC} from '../files/Colors';
import SecondGameCard from './SecondGameCard';

const { height, width } = Dimensions.get('window');


const SecondGameIntro = () => {

    const [highScore1, setHighScore1] = useState(0);
    const [highScore2, setHighScore2] = useState(0);
    const [highScore3, setHighScore3] = useState(0);
    const [highScore4, setHighScore4] = useState(0);
    const [highScore5, setHighScore5] = useState(0);
    const [highScore6, setHighScore6] = useState(0);
  
    useEffect(() => {
      loadHighScore();
    }, []);
  
    useFocusEffect(() => {
      loadHighScore();
    });
  
    const loadHighScore = async () => {
      try {
        const score1 = await AsyncStorage.getItem('highScore1');
        const score2 = await AsyncStorage.getItem('highScore2');
        const score3 = await AsyncStorage.getItem('highScore3');
        const score4 = await AsyncStorage.getItem('highScore4');
        const score5 = await AsyncStorage.getItem('highScore5');
        const score6 = await AsyncStorage.getItem('highScore6');
        if (score1 !== null) {
          setHighScore1(parseInt(score1));
        } else {
          await AsyncStorage.setItem('highScore1', '0');
          setHighScore1(0);
        }
        if (score2 !== null) {
          setHighScore2(parseInt(score2));
        } else {
          await AsyncStorage.setItem('highScore2', '0');
          setHighScore2(0);
        }
        if (score3 !== null) {
          setHighScore3(parseInt(score3));
        } else {
          await AsyncStorage.setItem('highScore3', '0');
          setHighScore3(0);
        }
        if (score4 !== null) {
          setHighScore4(parseInt(score4));
        } else {
          await AsyncStorage.setItem('highScore4', '0');
          setHighScore4(0);
        }
        if (score5 !== null) {
          setHighScore5(parseInt(score5));
        } else {
          await AsyncStorage.setItem('highScore5', '0');
          setHighScore5(0);
        }
        if (score6 !== null) {
          setHighScore6(parseInt(score6));
        } else {
          await AsyncStorage.setItem('highScore6', '0');
          setHighScore6(0);
        }
      } catch (error) {
        // console.log('Error loading high score:', error);
      }
    };

  return (
    <View style={[ { height: height * 0.24,}]}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
      <SecondGameCard continent='Europe' topScore={46} highScore={highScore1}/>
      <SecondGameCard continent='Asia' topScore={47} highScore={highScore2}/>
      <SecondGameCard continent='Africa' topScore={54} highScore={highScore3}/>
      <SecondGameCard continent='North America' topScore={23} highScore={highScore4}/> 
      <SecondGameCard continent='South America' topScore={12} highScore={highScore5}/>
      <SecondGameCard continent='Oceania' topScore={14} highScore={highScore6}/> 
      </ScrollView>
    </View>
  );

  
};



const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export default SecondGameIntro;