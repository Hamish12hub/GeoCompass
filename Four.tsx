import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const FourScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Four</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red', 
  },
});

export default FourScreen;
