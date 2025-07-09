
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import NotificationDetail from './src/screens/NotificationDetail';
import FilterScreen from './src/screens/FilterScreen';
import ProfileScreen from './src/screens/ProfileScreen.jsx';
import HelpScreen from './src/screens/HelpScreen.jsx';
import HelpGuide from './src/screens/HelpGuide.jsx';
import FaqDetail from './src/screens/FaqDetail.jsx';

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
        <Stack.Screen
          name="FilterScreen"
          component={FilterScreen}
          options={{
            title: 'FilterScreen',
            headerStyle: { backgroundColor: '#6DBE45' },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            title: 'ProfileScreen',
            headerStyle: { backgroundColor: '#6DBE45' },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="HelpScreen"
          component={HelpScreen}
          options={{
            title: 'HelpScreen',
            headerStyle: { backgroundColor: '#6DBE45' },
            headerTintColor: '#fff',
            headerShown: false
          }}
        />
        <Stack.Screen
          name="HelpGuide"
          component={HelpGuide}
          options={{
            title: 'HelpGuide',
            headerStyle: { backgroundColor: '#6DBE45' },
            headerTintColor: '#fff',
            headerShown: false
          }}
        />
        <Stack.Screen
          name="FaqDetail"
          component={FaqDetail}
          options={{
            title: 'FAQ Detail',
            headerStyle: { backgroundColor: '#6DBE45' },
            headerTintColor: '#fff',
            headerShown: false
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
