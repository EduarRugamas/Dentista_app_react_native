import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from './Screens/HomeScreen';
import SplashScreen from './Screens/SplashScreen';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';

const Stack = createStackNavigator()

function MyStack() {
  return(
      <Stack.Navigator initialRoutename='Splash' headerMode="none">
        <Stack.Screen name='Splash' component={SplashScreen}/>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='login' component={LoginScreen}/>
        <Stack.Screen name='register' component={RegisterScreen}/>
      </Stack.Navigator>
  );
}

// function SplashScreen({navigation}){
//     setTimeout(() => {
//         navigation.navigate('Home');
//     },5000);
//     return(
//         <View Style={{flex:1,alignContent:'center', alignItems:'center'}}>
//             <Text style={{color:'#000000'}}>Splash Screen</Text>
//         </View>
//     );
// }

export default function App() {
  return (
    <NavigationContainer>
        <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
