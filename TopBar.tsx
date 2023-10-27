import React, { useState } from 'react';
import { SafeAreaView, View, Image, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const { width, height } = Dimensions.get('window');
const TopBar: React.FC = () => {
  const imageHeight = width * 0.12;
  const [isCross, setIsCross] = useState(true);
  const toggleIcon = () => {
    setIsCross(!isCross);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.rowContainer}>
        <Image
          source={require('./assets/Title.png')}
          style={{ height: imageHeight, marginBottom: 2, width: width * 0.7, marginLeft: width * 0.13 }}
          resizeMode="contain"
        />
               
      </View>
      
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomWidth: height * 0.005,
    borderBottomColor: 'black',
  },
});
export default TopBar;





// import React, { useState, useRef } from 'react';
// import { SafeAreaView, View, Image, StyleSheet, Dimensions, TouchableOpacity, Text, Animated } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import DropDown from './DropDown';
// const { width, height } = Dimensions.get('window');
// import { purpleC, grayC, blackC, whiteC, greenC, orangeC, redC, font } from '../files/Colors';

// const TopBar: React.FC = () => {
//   const imageHeight = width * 0.12;
//   const [isCross, setIsCross] = useState(true);
//   const dropDownHeight = height * 0.9;
//   const animatedHeight = useRef(new Animated.Value(0)).current;

//   const toggleIcon = () => {
//     if (isCross) {
//       Animated.timing(animatedHeight, {
//         toValue: dropDownHeight,
//         duration: 260,
//         useNativeDriver: false,
//       }).start();
//     } else {
//       Animated.timing(animatedHeight, {
//         toValue: 0,
//         duration: 260,
//         useNativeDriver: false,
//       }).start();
//     }
//     setIsCross(!isCross);
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.rowContainer}>
//         <Image
//           source={require('../assets/Title.png')}
//           style={{ height: imageHeight, marginBottom: 2, width: width * 0.7, marginLeft: width * 0.13 }}
//           resizeMode="contain"
//         />
//         <TouchableOpacity onPress={toggleIcon} style={{ width: width * 0.15, justifyContent: 'center', alignItems: 'center' }}>
//           <Icon name={isCross ? 'navicon' : 'times'} size={width * 0.07} color="black" />
//         </TouchableOpacity>
//       </View>

//       <Animated.View style={[styles.dropDown, { height: animatedHeight }]}>
//         <DropDown/>
//       </Animated.View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'white',
//   },
//   rowContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 10,
//     borderBottomWidth: height * 0.005,
//     borderBottomColor: 'black',
//   },
//   dropDown: {
//     width: width,
//     overflow: 'hidden',
//   },
// });

// export default TopBar;












