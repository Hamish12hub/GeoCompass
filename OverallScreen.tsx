import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';
import Swiper from 'react-native-swiper';
import ListPage from './OneList/ListPage';
import HomePage from './TwoHome/HomePage';
import GamePage from './ThreeGame/GamePage';
import Four from './Four';
import { RFValue } from 'react-native-responsive-fontsize';
import { useIsFocused } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconGame from 'react-native-vector-icons/Ionicons';
import IconGameOne from 'react-native-vector-icons/Ionicons';
import { purpleC, grayC, blackC, whiteC, blueC, blueGrayC } from './files/Colors';
import TopBar from './TopBar';

const { width, height } = Dimensions.get('window');

const HomeScreen: React.FC = () => {
  const pages = [<ListPage />, <HomePage />, <GamePage />, <Four />];
  const swiperRef = useRef<Swiper>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(1);
  const isFocused = useIsFocused();

  const handleButtonPress = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy(index - selectedIndex);
      setSelectedIndex(index);
    }
  };


  return (
    <View style={styles.container}>

 <TopBar/>  

      <Swiper
        showsPagination={false}
        ref={swiperRef}
        loop={false}
        index={1}
        onIndexChanged={(index) => setSelectedIndex(index)}
      >
        {pages.map((page, index) => (
          <View key={index} style={{ flex: 1 }}>
            {page}
          </View>
        ))}
      </Swiper>

      <View style={styles.bottomOutside}>
        <View style={styles.bottomBar}>
          <TouchableOpacity
            style={[
              styles.button,
              selectedIndex === 0 ? styles.selectedButton : null,
            ]}
            onPress={() => handleButtonPress(0)}
          >
            <Text
              style={[
                styles.buttonText,
                selectedIndex === 0 ? styles.selectedButtonText : null,
              ]}
            >
              <Icon name="list" size={RFValue(18)} color={selectedIndex === 0 ? "white" : "gray"}/>  
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              selectedIndex === 1 ? styles.selectedButton : null,
            ]}
            onPress={() => handleButtonPress(1)}
          >
            <Text
              style={[
                styles.buttonText,
                selectedIndex === 1 ? styles.selectedButtonText : null,
              ]}
            >
                <Icon name="home" size={RFValue(18)} color={selectedIndex === 1 ? "white" : "gray"}/>  
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              selectedIndex === 2 ? styles.selectedButton : null,
            ]}
            onPress={() => handleButtonPress(2)}
          >
            <Text
              style={[
                styles.buttonText,
                selectedIndex === 2 ? styles.selectedButtonText : null,
              ]}
            >
              <IconGameOne name="bar-chart" size={RFValue(18)} color={selectedIndex === 2 ? "white" : "gray"}/>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              selectedIndex === 3 ? styles.selectedButton : null,
            ]}
            onPress={() => handleButtonPress(3)}
          >
            <Text
              style={[
                styles.buttonText,
                selectedIndex === 3 ? styles.selectedButtonText : null,
              ]}
            >
               <IconGameOne name="bar-chart" size={RFValue(18)} color={selectedIndex === 3 ? "white" : "gray"}/> 
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  bottomOutside: {
    backgroundColor: 'rgb(65, 155, 240)',
    width: width,
    height: height * 0.12,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'absolute',
    bottom: 0,
  },
  bottomBar: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // width: width - height * 0.06,
    width: width * 0.92,
    height: height * 0.08,
    alignSelf: 'center',
    borderRadius: 30,
    elevation: 3,
    position: 'absolute',
    bottom: height * 0.02,
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  selectedButton: {
    backgroundColor: 'gray',
  },
  selectedButtonText: {
    color: 'white',
  },
});

export default HomeScreen;





