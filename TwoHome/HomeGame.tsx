import { purpleC, grayC, blackC, whiteC, blueC, blueGrayC, redC , greenC} from '../files/Colors';
import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  PanResponder,
  Dimensions,
  TouchableOpacity,
  Button,
  Easing,
} from 'react-native';
import { data } from '../files/countriesData';
import HeaderTop from './HeaderTop';
import HeaderBottom from './HeaderBottom';
interface CountryData {
  country: string;
  capital: string;
  latitude: string;
  longitude: string;
}
const getRandomItem = (array: CountryData[]) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};
import Cards from './Cards';
import Footer from './Footer';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RFValue } from 'react-native-responsive-fontsize';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window');

type RootStackParamList = {
  OverallScreen: undefined; 
};
type WrongScoreNavigationProp = NavigationProp<RootStackParamList, 'OverallScreen'>;


const HomeGame = () => {
  const [rightSquarePosition] = useState(new Animated.ValueXY());
  const [leftSquarePosition] = useState(new Animated.ValueXY());
  const [isRightSquareVisible, setIsRightSquareVisible] = useState(true);
  const [isLeftSquareVisible, setIsLeftSquareVisible] = useState(true);
  const [count, setCount] = useState(0);
  const [loseBlocker, setLoseBlocker] = useState(false);
  const threshold = width * 0.01;
  const [countryOne, setCountryOne] = useState('');
  const [capitalOne, setCapitalOne] = useState('');
  const [longitudeOne, setLongitudeOne] = useState(0);
  const [latitudeOne, setLatitudeOne] = useState(0);
  const [countryTwo, setCountryTwo] = useState('');
  const [capitalTwo, setCapitalTwo] = useState('');
  const [longitudeTwo, setLongitudeTwo] = useState(-10);
  const [latitudeTwo, setLatitudeTwo] = useState(-10);
  const [gamePlayingLeft, setGamePlayingLeft] = useState(true);
  const [gamePlayingRight, setGamePlayingRight] = useState(true);
  const [backgroundColorMain, setBackgroundColorMain] = useState(blueC);



  const [highScore, setHighScore] = useState(0);
  const [gamesPlayed, setGamesPlayed] = useState(0);
  useEffect(() => {
    loadHighScore();
  }, []);
  const loadHighScore = async () => {
    try {
      const storedScore = await AsyncStorage.getItem('mainScore');
      const parsedScore = parseInt(storedScore ?? '0', 10);
    const storedGameCount = await AsyncStorage.getItem('gameCount');
    const parsedGameCount = parseInt(storedGameCount ?? '0', 10);
      if (!isNaN(parsedScore)) {
        setHighScore(parsedScore);
      }
      if (!isNaN(parsedGameCount)) {
        setGamesPlayed(parsedGameCount);
      }
    } catch (error) {
    }
  };
  const updateHighScore = async () => {
    if (count > highScore) {
      try {
        await AsyncStorage.setItem('mainScore', count.toString());
        setHighScore(count);
      } catch (error) {
      }
    }
  };
  

  const [countdown, setCountdown] = useState(15);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    if (isRunning) {
      timer = setInterval(() => {
        if (countdown > 0) {
          setCountdown(countdown - 1);
        } else {
          clearInterval(timer);
          WrongScore();
        }
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [countdown, isRunning]);
  const handleStart = () => {
    setIsRunning(true);
  };
  const handlePause = () => {
    setIsRunning(false);
  };
  const handleReset = () => {
    setIsRunning(false);
      setCountdown(15);
  };
  const handleResetQuick = () => {
    setIsRunning(false);
      setCountdown(10);
  };
  

  useEffect(() => {
    setInterval(() => {
      handleStart()
    }, 1000);
    const randomItem = getRandomItem(data);
    setCountryOne(randomItem.country);
    setCapitalOne(randomItem.capital);
    setLongitudeOne(parseFloat(randomItem.longitude));
    setLatitudeOne(parseFloat(randomItem.latitude));
    const randomItem2 = getRandomItem(data);
    setCountryTwo(randomItem2.country);
    setCapitalTwo(randomItem2.capital);
    setLongitudeTwo(parseFloat(randomItem2.longitude));
    setLatitudeTwo(parseFloat(randomItem2.latitude));
  }, []);

  const LeftCheck = () => {
    switch (direction) {
      case 'North':
        if (latitudeOne > latitudeTwo) {CorrectScore();} else {WrongScore();setGamePlayingLeft(false)}break;
      case 'East':
        if (longitudeOne > longitudeTwo) {CorrectScore();} else { WrongScore();setGamePlayingLeft(false);}break;
      case 'South':
        if (latitudeOne < latitudeTwo) {CorrectScore();} else {WrongScore();setGamePlayingLeft(false);}
        break;
      case 'West':
        if (longitudeOne < longitudeTwo) {
          CorrectScore();} else {WrongScore();setGamePlayingLeft(false);}
        break;
      default:break;}
  };
  const RightCheck = () => {
    switch (direction) {
      case 'North':
        if (latitudeTwo > latitudeOne) {CorrectScore();} else {WrongScore();setGamePlayingRight(false)}break;
      case 'East':
        if (longitudeTwo > longitudeOne) {CorrectScore();} else {WrongScore();setGamePlayingRight(false)}
        break;
      case 'South':
        if (latitudeTwo < latitudeOne) {CorrectScore();} else {WrongScore();setGamePlayingRight(false)}
        break;
      case 'West':
        if (longitudeTwo < longitudeOne) {
          CorrectScore();} else {WrongScore();setGamePlayingRight(false)}
        break;
      default:break;}
  };

  const changeDataOne = () => {
    let randomItem = getRandomItem(data);
    while (
      randomItem.country === countryTwo &&
      randomItem.capital === capitalTwo &&
      parseFloat(randomItem.longitude) === longitudeTwo &&
      parseFloat(randomItem.latitude) === latitudeTwo
    ) {
      randomItem = getRandomItem(data);
    }
    setCountryOne(randomItem.country);
    setCapitalOne(randomItem.capital);
    setLongitudeOne(parseFloat(randomItem.longitude));
    setLatitudeOne(parseFloat(randomItem.latitude));
  };

  const changeDataTwo = () => {
    let randomItem = getRandomItem(data);
    while (
      randomItem.country === countryOne &&
      randomItem.capital === capitalOne &&
      parseFloat(randomItem.longitude) === longitudeOne &&
      parseFloat(randomItem.latitude) === latitudeOne
    ) {
      randomItem = getRandomItem(data);
    }
    setCountryTwo(randomItem.country);
    setCapitalTwo(randomItem.capital);
    setLongitudeTwo(parseFloat(randomItem.longitude));
    setLatitudeTwo(parseFloat(randomItem.latitude));
  };

  const [direction, setDirection] = useState(getRandomDirection());
  const chooseDirection = () => {
    const directions = ['North', 'South', 'East', 'West'];
    let randomDirection;
    do {
      randomDirection = directions[Math.floor(Math.random() * directions.length)];
    } while (randomDirection === direction);
  
    setDirection(randomDirection);
  };
  function getRandomDirection() {
    const directions = ['North', 'South', 'East', 'West'];
    return directions[Math.floor(Math.random() * directions.length)];
  }
  
  const CorrectScore = () => {
    handlePause()
     setTimeout(() => {
       setBackgroundColorMain(greenC);
       if(count <= 3){handleReset()
       }else{handleResetQuick()}
       handleStart()
     }, 400);
    setTimeout(() => {
      chooseDirection();
      setCount(count + 1);
      setBackgroundColorMain(blueC);
    }, 900);
  };

  const navigation = useNavigation<WrongScoreNavigationProp>();

  const WrongScore = () => {
    updateHighScore()
    setCountdown(0);
    setLoseBlocker(true);
    setBackgroundColorMain(redC);
     setTimeout(() => {
      navigation.navigate('OverallScreen');
    }, 2000);
  };

    const resetRightSquare = () => {
      if (!isRightSquareVisible) {
        setTimeout(() => {
          Animated.spring(rightSquarePosition, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false,
          }).start(() => {
            setIsRightSquareVisible(true);
          });
        }, 800);
      }
    };
    if (!isRightSquareVisible) {
      requestAnimationFrame(resetRightSquare);
    }

  const rightSquarePanResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      if (gesture.dx > 0) {
        rightSquarePosition.setValue({ x: gesture.dx, y: 0 });
      }
    },
    onPanResponderRelease: (event, gesture) => {
      if (gesture.dx > threshold) {
        Animated.timing(rightSquarePosition, {
          toValue: { x: width, y: 0 },
          duration: 200,
          useNativeDriver: false,
        }).start(() => {
          setIsRightSquareVisible(false);
          RightCheck()
          changeDataTwo()
        });
      } else {
        Animated.spring(rightSquarePosition, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      }
    },
  });
  const animatedRightSquareStyles = {
    transform: [{ translateX: rightSquarePosition.x }],
  };
  
    const resetLeftSquare = () => {
      if (!isLeftSquareVisible) {
        setTimeout(() => {
          Animated.spring(leftSquarePosition, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false,
          }).start(() => {
            setIsLeftSquareVisible(true);
          });
        }, 800);
      }
    };
    if (!isLeftSquareVisible) {
      requestAnimationFrame(resetLeftSquare);
    }

  const leftSquarePanResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      if (gesture.dx < 0) {
        leftSquarePosition.setValue({ x: gesture.dx, y: 0 });
      }
    },
    onPanResponderRelease: (event, gesture) => {
      if (gesture.dx < -threshold) {
        Animated.timing(leftSquarePosition, {
          toValue: { x: -width, y: 0 },
          duration: 200,
          useNativeDriver: false,
        }).start(() => {
          setIsLeftSquareVisible(false);
          LeftCheck()
          changeDataOne()
        });
      } else {
        Animated.spring(leftSquarePosition, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      }
    },
  });

  const animatedLeftSquareStyles = {
    transform: [{ translateX: leftSquarePosition.x }],
  };


  return (
    <SafeAreaView style={{ ...styles.container, backgroundColor: backgroundColorMain }}>
{!isRightSquareVisible || !isLeftSquareVisible  ? ( <View style={styles.squareblocker}/> ) : (<></>)} 
{loseBlocker ? (<View style={styles.blocker}/> ) : (<></>)}
        <HeaderTop direction={direction}/>
        <HeaderBottom score={count}/>
      <View style={styles.splitContainer}>
        <View style={styles.leftContainer}>
          {gamePlayingLeft ? (
          isLeftSquareVisible && (
            <Animated.View
              style={[
                styles.squareLeft,
                { width: width * 0.45,},
                animatedLeftSquareStyles,
              ]}
              {...leftSquarePanResponder.panHandlers}
            >
              <Cards LR={'left'} country={countryOne} capital={capitalOne} longitude={longitudeOne} latitude={latitudeOne} />
            </Animated.View>
          )
        ) : (
          <></>
        )}
       </View>
        <View style={styles.rightContainer}>
        {gamePlayingRight ? (
          isRightSquareVisible && (
            <Animated.View
              style={[
                styles.squareRight,
                { width: width * 0.45, },
                animatedRightSquareStyles,
              ]}
              {...rightSquarePanResponder.panHandlers}
            >
              <Cards LR={'right'} country={countryTwo} capital={capitalTwo} longitude={longitudeTwo} latitude={latitudeTwo} />
            </Animated.View>
 )
        ) : (
          <></>
        )}
        </View>
      </View>
      <View style={styles.Footer}>
        <View style={styles.InsideFooter}>
 
        <Text style={styles.countText}>{countdown}</Text>
      
<View>
      </View>
      
</View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',

  },
  header: {
    height: height * 0.24,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splitContainer: {
    height: height * 0.45,
    flexDirection: 'row',
    width: width,
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  squareRight: {
    borderRadius: 10,
    backgroundColor: purpleC,
  },
  squareLeft: {
    borderRadius: 10,
  },
  countText: {
    fontSize: RFValue(50),
  },
  blocker: {
    width: width,
    height: height,
    position: 'absolute',
    zIndex: 100,
  },
  squareblocker: {
    width: width,
    height: height,
    position: 'absolute',
    zIndex: 100,
  },
  InsideFooter: {
    height: height * 0.16,
    width: height * 0.16,
    backgroundColor: whiteC,
    borderRadius: 10,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Footer: {
    alignItems: 'center',
  }
});

export default HomeGame;