// // import React, { useEffect, useRef } from 'react';
// // import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native';
// // import { purpleC, grayC, blackC, whiteC, blueC, blueGrayC } from '../files/Colors';

// // interface FooterProps {
// //   timer: number;
// // }

// // const { width, height } = Dimensions.get('window');

// // const Footer: React.FC<FooterProps> = ({ timer }) => {
// //   const animatedValue = useRef(new Animated.Value(0)).current;
  
// //   useEffect(() => {
// //     Animated.timing(animatedValue, {
// //       toValue: 100,
// //       duration: 20000,
// //       useNativeDriver: false,
// //     }).start(() => {
// //       console.log('Animation is done');
// //     });
// //   }, [100]);
  
// //   const animatedWidth = animatedValue.interpolate({
// //     inputRange: [0, 100],
// //     outputRange: ['100%', '0%'],
// //   });
// //   return (
// //     <View style={styles.InsideFooter}>
// //       <View style={styles.OutsideBar}>
// //         <Animated.View
// //           style={[
// //             styles.InsideBar,
// //             { width: animatedWidth }
// //           ]}
// //         />
// //       </View>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   InsideFooter: {
// //     width: width * 0.94,
// //     height: '40%',
// //     backgroundColor: whiteC,
// //     borderRadius: 10,
// //     borderColor: 'black',
// //     alignItems: 'center',
// //     justifyContent: 'space-evenly',
// //   },
// //   headerText: {
// //     fontSize: 12,
// //     backgroundColor: whiteC,
// //   },
// //   OutsideBar: {
// //     backgroundColor: grayC,
// //     width: '95%',
// //     aspectRatio: 10 / 1,
// //     borderRadius: 10,
// //     borderWidth: 3,
// //     borderColor: 'black',
// //     overflow: 'hidden',
// //     alignSelf: 'center',
// //     shadowColor: blackC,
// //     shadowOffset: {
// //       width: 2,
// //       height: 4,
// //     },
// //     shadowOpacity: 0.4,
// //     shadowRadius: 6,
// //     elevation: 5,
// //   },
// //   InsideBar: {
// //     height: '100%',
// //     backgroundColor: 'red',
// //   },
// // });

// // export default Footer;





// import React, { useEffect, useRef, useState } from 'react';
// import { View, Text, StyleSheet, Dimensions, Animated, TouchableOpacity } from 'react-native';
// import { purpleC, grayC, blackC, whiteC, blueC, blueGrayC } from '../files/Colors';

// interface FooterProps {
//   timer: number;
// }

// const { width, height } = Dimensions.get('window');

// const Footer: React.FC<FooterProps> = ({ timer }) => {

//   const animatedValue = useRef(new Animated.Value(0)).current;
//   const [isAnimating, setIsAnimating] = useState(false);
//   const startAnimation = () => {
//     setIsAnimating(true);
//     Animated.timing(animatedValue, {
//       toValue: 100,
//       duration: 20000,
//       useNativeDriver: false,
//     }).start(() => {
//       setIsAnimating(false);
//       console.log('Animation is done');
//     });
//   };
//   const resetAnimation = () => {
//     setIsAnimating(false);
//     animatedValue.setValue(0);
//   };

//   useEffect(() => {
//     if (!isAnimating) {
//       animatedValue.setValue(0);
//     }
//   }, [isAnimating]);

//   return (
//     <View style={styles.InsideFooter}>
//       <View style={styles.OutsideBar}>
//         <Animated.View
//           style={[
//             styles.InsideBar,
//             { width: animatedValue.interpolate({ inputRange: [0, 100], outputRange: ['0%', '100%'] }) }
//           ]}
//         />
//       </View>
//       <TouchableOpacity onPress={isAnimating ? resetAnimation : startAnimation}>
//         <View style={styles.button}>
//           <Text style={styles.buttonText}>{isAnimating ? 'Reset' : 'Start'}</Text>
//         </View>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   InsideFooter: {
//     width: width * 0.94,
//     height: '40%',
//     backgroundColor: whiteC,
//     borderRadius: 10,
//     borderColor: 'black',
//     alignItems: 'center',
//     justifyContent: 'space-evenly',
//   },
//   headerText: {
//     fontSize: 12,
//     backgroundColor: whiteC,
//   },
//   OutsideBar: {
//     backgroundColor: grayC,
//     width: '95%',
//     aspectRatio: 10 / 1,
//     borderRadius: 10,
//     borderWidth: 3,
//     borderColor: 'black',
//     overflow: 'hidden',
//     alignSelf: 'center',
//     shadowColor: blackC,
//     shadowOffset: {
//       width: 2,
//       height: 4,
//     },
//     shadowOpacity: 0.4,
//     shadowRadius: 6,
//     elevation: 5,
//   },
//   InsideBar: {
//     height: '100%',
//     backgroundColor: 'red',
//   },
//   button: {
//     backgroundColor: blueC,
//     padding: 10,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: whiteC,
//     fontSize: 16,
//   },
// });

// export default Footer;

  // const resumeAnimation = () => {
  //   if (isPaused) {
  //     setIsAnimating(true);
  //     setIsPaused(false);

  //     Animated.timing(animatedValue, {
  //       toValue: 100,
  //       duration: animationDuration,
  //       useNativeDriver: false,
  //     }).start(() => {
  //       setIsAnimating(false);
  //       console.log('Animation is done');
  //     });
  //   }
  // };








  // const pauseAnimation = () => {
  //   if (isAnimating) {
  //     animatedValue.stopAnimation(value => {
  //       setIsAnimating(false);
  //       setIsPaused(true);
  //       setAnimationDuration(animationDuration - value * (initialAnimationDuration / 100)); // Adjust duration based on remaining progress
  //     });
  //   }
  // };







// const [secondsRemaining, setSecondsRemaining] = useState(20);
//   const [isRunning, setIsRunning] = useState(false);
//   useEffect(() => {
//     let intervalId: string | number | NodeJS.Timeout | undefined;
//     if (isRunning && secondsRemaining > 0) {
//       intervalId = setInterval(() => {
//         setSecondsRemaining((prevSeconds) => prevSeconds - 1);
//       }, 1000);
//     } else if (secondsRemaining === 0) {
//       WrongScore()
//       clearInterval(intervalId);
//     }
//     return () => {
//       clearInterval(intervalId);
//     };
//   }, [isRunning, secondsRemaining]);
//   const startTimer = () => {setIsRunning(true);};
//   const pauseTimer = () => {setIsRunning(false);};
//   const restartTimer = () => {setSecondsRemaining(20);setIsRunning(true);};













  // const animatedValue = useRef(new Animated.Value(0)).current;
  // const [isAnimating, setIsAnimating] = useState(false);
  // const [isPaused, setIsPaused] = useState(false);
  // const [animationDuration, setAnimationDuration] = useState(20000);
  // const startAnimation = () => {
  //   setIsAnimating(true);
  //   setIsPaused(false);
  //   animatedValue.setValue(0);
  //   Animated.timing(animatedValue, {
  //     toValue: 100,
  //     duration: animationDuration,
  //     useNativeDriver: false,
  //   }).start(() => {
  //     setIsAnimating(false);
  //     console.log('Animation is done');
  //   });
  // };
  // const pauseAnimation = () => {
  //   if (isAnimating) {
  //     animatedValue.stopAnimation((value: number) => {
  //       setIsAnimating(false);
  //       setIsPaused(true);
  //       setAnimationDuration((100 - value) * (animationDuration / 100)); 
  //     });
  //   }
  // };
  // const resumeAnimation = () => {
  //   if (isPaused) {
  //     setIsAnimating(true);
  //     setIsPaused(false);
  //     Animated.timing(animatedValue, {
  //       toValue: 100,
  //       duration: animationDuration,
  //       useNativeDriver: false,
  //     }).start(() => {
  //       setIsAnimating(false);
  //       console.log('Animation is done');
  //     });
  //   }
  // };
  // const resetAnimation = () => {
  //   setIsAnimating(false);
  //   setIsPaused(false);
  //   animatedValue.setValue(0);
  // };
  // useEffect(() => {
  //   if (!isAnimating && !isPaused) {
  //     animatedValue.setValue(0);
  //   }
  // }, [isAnimating, isPaused]);

  







import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated, TouchableOpacity } from 'react-native';
import { purpleC, grayC, blackC, whiteC, blueC, blueGrayC } from '../files/Colors';

interface FooterProps {
  timer: number;
}

const { width, height } = Dimensions.get('window');

const Footer: React.FC<FooterProps> = ({ timer }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [animationDuration, setAnimationDuration] = useState(20000);

  const startAnimation = () => {
    setIsAnimating(true);
    setIsPaused(false);
    animatedValue.setValue(0);

    Animated.timing(animatedValue, {
      toValue: 100,
      duration: animationDuration,
      useNativeDriver: false,
    }).start(() => {
      setIsAnimating(false);
      console.log('Animation is done');
    });
  };

  const pauseAnimation = () => {
    if (isAnimating) {
      animatedValue.stopAnimation((value: number) => {
        setIsAnimating(false);
        setIsPaused(true);
        setAnimationDuration((100 - value) * (animationDuration / 100)); // Adjust duration based on remaining progress
      });
    }
  };

  const resumeAnimation = () => {
    if (isPaused) {
      setIsAnimating(true);
      setIsPaused(false);

      Animated.timing(animatedValue, {
        toValue: 100,
        duration: animationDuration,
        useNativeDriver: false,
      }).start(() => {
        setIsAnimating(false);
        console.log('Animation is done');
      });
    }
  };

  const resetAnimation = () => {
    setIsAnimating(false);
    setIsPaused(false);
    animatedValue.setValue(0);
  };

  useEffect(() => {
    if (!isAnimating && !isPaused) {
      animatedValue.setValue(0);
    }
  }, [isAnimating, isPaused]);

  return (
    <View style={styles.InsideFooter}>
      <View style={styles.OutsideBar}>
        <Animated.View
          style={[
            styles.InsideBar,
            { width: animatedValue.interpolate({ inputRange: [0, 100], outputRange: ['0%', '100%'] }) }
          ]}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={isAnimating ? pauseAnimation : startAnimation}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{isAnimating ? 'Pause' : 'Start'}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={isPaused ? resumeAnimation : resetAnimation}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{isPaused ? 'Resume' : 'Reset'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  InsideFooter: {
    width: width * 0.94,
    height: '40%',
    backgroundColor: whiteC,
    borderRadius: 10,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  headerText: {
    fontSize: 12,
    backgroundColor: whiteC,
  },
  OutsideBar: {
    backgroundColor: grayC,
    width: '95%',
    aspectRatio: 10 / 1,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    alignSelf: 'center',
    shadowColor: blackC,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 5,
  },
  InsideBar: {
    height: '100%',
    backgroundColor: 'red',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: blueC,
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: whiteC,
    fontSize: 16,
  },
});

export default Footer;
