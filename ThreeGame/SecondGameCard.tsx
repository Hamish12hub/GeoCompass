import React, { useState, useEffect } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { View, Dimensions, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { purpleC, grayC, blackC, whiteC, greenC, orangeC, redC } from '../files/Colors';
import { RFValue } from 'react-native-responsive-fontsize';

const { height } = Dimensions.get('window');




const FirstGameCard = ({
  continent,
  topScore,
  highScore,
}: {
  continent: string; // or you can use an enum or custom type
  topScore: number;
  highScore: number;
}) => {


  type RootStackParamList = {
    SecondGameScreen: {
      continent: string;
      topScore: number;
      highScore: number;
    };
  };

  // type RootStackParamList = {
  //   SecondGameScreen: undefined; // Define your navigation stack here
  // };
  
  // type PlayButtonNavigationProp = NavigationProp<RootStackParamList, 'SecondGameScreen'>;
  
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  

  // const navigation = useNavigation<PlayButtonNavigationProp>();


  const boxWidth = height * 0.26;
  const boxHeight = height * 0.2;
  const marginRight = continent === 'Ociania' ? height * 0.02 : 0;
  // const navigation = useNavigation();


  let imageSource;

  if (continent === 'Oceania') {
    imageSource = require('../assets/Oceania.png');
  } else if (continent === 'Europe') {
    imageSource = require('../assets/Europe.jpg');
  } else if (continent === 'Asia') {
    imageSource = require('../assets/Asia.png');
  } else if (continent === 'Africa') {
    imageSource = require('../assets/Africa.png');
  } else if (continent === 'North America') {
     imageSource = require('../assets/NorthAmerica.png'); 
  } else if (continent === 'South America') {
     imageSource = require('../assets/SouthAmerica.png'); 
   } 
  else {
    imageSource = require('../assets/Europe.jpg');
  }

  
  
  return (
    // <TouchableOpacity
    //   style={[styles.box, { width: boxWidth, height: boxHeight, marginRight }]}
    //   onPress={() =>
    //     navigation.navigate('SecondGameScreen')
    //   }
    // >


    <TouchableOpacity
      style={[styles.box, { width: boxWidth, height: boxHeight, marginRight }]}
      onPress={() =>
        navigation.navigate('SecondGameScreen', {
          continent: continent,
          topScore: topScore,
          highScore: highScore,
        })
      }
    >

{/* , {continent,topScore, highScore, } */}


      <View
          style={styles.mainBox}
        ><Image
        source={imageSource}
        resizeMode="stretch"
        style={styles.imageContainer}
      />
      <View style={styles.BottomRow}><Text style={styles.BottomRowText}>{continent}</Text></View></View>

      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>
          {highScore}/{topScore}
        </Text>
      </View>

      <View style={styles.progressBar}>
        <View
          style={[
            styles.progressFill,
            {
              width: `${(highScore / topScore) * 100}%`,
              backgroundColor: highScore / topScore === 1 ? greenC : highScore / topScore < 0.25 ? redC : orangeC,
            },
          ]}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    marginTop: height * 0.02,
    marginLeft: height * 0.02,
    backgroundColor: whiteC,
    borderRadius: 10,
    elevation: 2,
  },
  mainBox: {
    width: height * 0.13,
    height: height * 0.13,
    position: 'absolute',
    marginLeft: height * 0.01,
    marginTop: height * 0.01,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 10,
    borderColor: blackC,
    borderWidth: 2,
    backgroundColor: purpleC,
  },

  imageContainer: {
    width: '100%',
    height: '75%',
    borderTopLeftRadius: 8,
  borderTopRightRadius: 8,
  overflow: 'hidden',
  },
  BottomRowText: {
    fontSize: RFValue(9),
    color: whiteC,
    fontWeight: 'bold',
  },
  BottomRow: {
    width: '100%',
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  scoreContainer: {
    width: height * 0.10,
    height: height * 0.13,
    marginLeft: height * 0.15,
    marginTop: height * 0.01,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: orangeC,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  scoreText: {
    fontSize: RFValue(20),
    fontWeight: 'bold',
    color: whiteC,
  },
  progressBar: {
    width: '100%',
    height: height * 0.05,
    position: 'absolute',
    bottom: 0,
    backgroundColor: grayC,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
  },
});

export default FirstGameCard;
