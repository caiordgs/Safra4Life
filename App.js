import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, ScrollView, View, Button, Image, Platform, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Constants } from 'expo-constants';

import Login from './screens/Login';
import Cadastro from './screens/Cadastro'
import Hero from './Hero';
import Config from './screens/Config';
import Carteira from './screens/Carteira';
import api from './Src/Api';


function HomeScreen() {
  return (
    <>
    <Hero />
    <Login />
    </>
  );
}

function Form() {
  return (
    <Cadastro />
  );
}

function SScreen() {
  return(
    <Config />
  );
}

function Wallet() {
  return(
    <Carteira />
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
  return (
    <>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home-outline'
                : 'home-outline';
            } else if (route.name === 'Carteira') {
              iconName = focused ? 'wallet-outline' : 'wallet-outline';
            } else if (route.name === 'Configurações') {
              iconName = focused ? 'settings-outline' : 'settings-outline'
            } else if (route.name === 'Assessores') {
              iconName = focused ? 'people-circle-outline' : 'people-circle-outline'
            } else if (route.name === 'Cadastro') {
              iconName = focused ? 'document-outline' : 'document-outline'
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#151f52',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Cadastro" component={Form} />
        <Tab.Screen name="Assessores" component={SScreen} />
        <Tab.Screen name="Carteira" component={Wallet} />
        <Tab.Screen name="Configurações" component={SScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    
    </>
  );
}

const styles = StyleSheet.create({
container: {
  flex: 1,
},
image: {
  flex: 1,
  justifyContent: "center",
},
text: {
  fontSize: 20,
  lineHeight: 84,
  fontWeight: "bold",
  textAlign: "center",
  color: "#151f52"
},
accessibility: {
  fontSize: 25,
  lineHeight: 84,
  fontWeight: "bold",
  textAlign: "center",
  color: "#000"
},
home: {
  color: "#151f52",
  textAlign: "center",
  fontSize: 50
},
login: {
  backgroundColor: "white",
  padding: 15,
},
settings: {
  backgroundColor: "white"
}
});