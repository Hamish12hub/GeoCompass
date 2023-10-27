import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OverallScreen from './OverallScreen';
import HomeGame from './TwoHome/HomeGame';
import IntroScreen from './IntroScreen';
import FirstGameScreen from './ThreeGame/FirstGameScreen'
import SecondGameScreen from './ThreeGame/SecondGameScreen'
import { Text, View, Easing } from 'react-native';
import { AppRegistry } from 'react-native';


AppRegistry.registerComponent('GeoCompass', () => App);


const Stack = createStackNavigator();

const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowIntro(false);
    }, 2600); 
  }, []);

  const introScreenTransition = ({ current, layouts }: any) => {
    return {
      cardStyle: {
        transform: [
          {
            translateY: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.height, 0], 
            }),
          },
        ],
      },
    };
  };
  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={showIntro ? 'IntroScreen' : 'OverallScreen'}>
        {showIntro && (
          <Stack.Screen
            name="IntroScreen"
            component={IntroScreen}
            options={{
              headerShown: false,
              cardStyleInterpolator: introScreenTransition,
            }}
          />
        )}
        <Stack.Screen
          name="OverallScreen"
          component={OverallScreen}
          options={{ 
            headerShown: false,
          }}
        />
         <Stack.Screen
          name="HomeGame"
          component={HomeGame}
          options={{ 
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="FirstGameScreen"
          component={FirstGameScreen}
          options={{ 
            headerShown: false,
          }}
        /> 
         <Stack.Screen
          name="SecondGameScreen"
          component={SecondGameScreen}
          options={{ 
            headerShown: false,
          }}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


