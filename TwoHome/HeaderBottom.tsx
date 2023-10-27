import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, Animated, Easing } from 'react-native';
import { purpleC, grayC, blackC, whiteC, blueC, blueGrayC } from '../files/Colors';
import { RFValue } from 'react-native-responsive-fontsize';

interface HeaderProps {
  score: number;
}
const { width, height } = Dimensions.get('window');

const HeaderBottom: React.FC<HeaderProps> = ({ score}, ) => {
  const rotation = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.InsideHeader}>
      <View style={styles.scoreBottom}>
      <Text style={styles.scoreText}>Score : {score}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  InsideHeader: {
    height: height * 0.08,
    borderColor: 'black',
    alignItems: 'center',
  },
  directionText: {
    fontSize: RFValue(36),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scoreBottom: {
    flex: 1,
    width: width * 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: whiteC,
    borderRadius: 10,
  },
  scoreText: {
    fontSize: RFValue(26),
    fontWeight: 'bold',
  },
});


  
export default HeaderBottom;
