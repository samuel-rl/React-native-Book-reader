import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {enableScreens} from 'react-native-screens';
import StoryScreen from './screens/StoryScreen';
import Home from './screens/Home';
import {TransitionSpec} from '@react-navigation/stack/lib/typescript/src/types';

enableScreens();

const Stack = createSharedElementStackNavigator();

const config: TransitionSpec = {
  animation: 'timing',
  config: {
    duration: 700,
    delay: 150,
  },
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode={'none'}>
        <Stack.Screen
          options={{transitionSpec: {open: config, close: config}}}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="StoryScreen"
          component={StoryScreen}
          options={{
            cardStyleInterpolator: ({current: {progress}}) => {
              return {
                cardStyle: {
                  opacity: progress,
                },
              };
            },
            transitionSpec: {open: config, close: config},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
