import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, Animated, Easing } from 'react-native';
import { purpleC, grayC, blackC, whiteC, blueC, blueGrayC } from '../files/Colors';
import { RFValue } from 'react-native-responsive-fontsize';

interface HeaderProps {
  direction: string;
}
const { width, height } = Dimensions.get('window');

const HeaderTop: React.FC<HeaderProps> = ({ direction ,}, ) => {
  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    let rotationDegree = 0;
    switch (direction) {
      case 'North':
        rotationDegree = 90;
        break;
      case 'South':
        rotationDegree = 270;
        break;
      case 'East':
        rotationDegree = 180;
        break;
      default:
        rotationDegree = 0;
    }
    Animated.timing(rotation, {
      toValue: rotationDegree,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [direction]);

  return (
    <View style={styles.InsideHeader}>
        <View style={styles.topView}>
      <View style={styles.LeftSide}>
        <Text style={styles.headerText}>What is further</Text>
        <Text style={styles.directionText}>{direction}</Text>
      </View>
      <View style={styles.RightSide}>
        <Animated.Image
          source={require('../assets/arrow.png')}
          style={[
            styles.image,
            {
              transform: [{ rotate: rotation.interpolate({ inputRange: [0, 360], outputRange: ['0deg', '360deg'] }) }],
            },
          ]}
          resizeMode="contain"
        />
      </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  InsideHeader: {
    height: height * 0.12,
    borderColor: 'black',
    alignItems: 'center',
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: whiteC,
    borderRadius: 10,
    flex: 2,
    width: width * 0.93,
  },
  headerText: {
    fontSize: RFValue(12),
    position: 'absolute',
    top: 5,
    textDecorationLine: 'underline',
  },
  directionText: {
    fontSize: RFValue(36),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  LeftSide: {
    width: width * 0.44,
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  RightSide: {
    width: width * 0.44,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: '100%',
  },
});


  
export default HeaderTop;



