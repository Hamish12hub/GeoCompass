import React from 'react';
import { View, StyleSheet, Image, Dimensions, Text } from 'react-native';
import { purpleC, grayC, blackC, whiteC, blueC, } from './files/Colors';

const IntroScreen = () => {
  const { width } = Dimensions.get('window');

  return (
    <View style={styles.container}>
     <Text>hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: blueC,
  },
});

export default IntroScreen;
