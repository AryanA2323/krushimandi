
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import NotificationDetail from './src/screens/NotificationDetail';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Krushimandi',
            headerStyle: { backgroundColor: '#6DBE45' },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Notification"
          component={NotificationScreen}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="NotificationDetail"
          component={NotificationDetail}
          options={{
            title: 'Details',
            headerStyle: { backgroundColor: '#6DBE45' },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
