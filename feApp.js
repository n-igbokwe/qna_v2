import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {homePage} from './components/homePage';
import {liveLecture} from './components/liveLecture'
import { SignUpPage } from './components/signUpPage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
        name="Homepage"
        component={homePage}
        >
        </Stack.Screen> */}
          <Stack.Screen
          name="Sign Up"
          component={SignUpPage}
          >
        </Stack.Screen>
        <Stack.Screen
          name="Question Board"
          component={liveLecture}
          >
        </Stack.Screen>
    
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App