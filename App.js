import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


const homeImage = { uri: "https://media.discordapp.net/attachments/956541509300269063/959755929732120596/Botao_app_v1_azul.png?width=660&height=660" };

function HomeScreen() {
  return (
    <View style={styles.container}>
    <ImageBackground source={homeImage} style={styles.image}></ImageBackground>
    <StatusBar style="auto" />
    <View style={styles.login}>
      <TextInput style={{height: 50}}
      margin={7}
      borderWidth={1}
      textAlign="center"
      placeholder="Login"
      />
      <TextInput style={{height: 50}}
      margin={7}
      borderWidth={1}
      textAlign="center"
      secureTextEntry={true}
      placeholder="Password"
      />
    </View>
  </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
    <ImageBackground source={homeImage} style={styles.image}></ImageBackground>
    <StatusBar style="auto" />
  </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
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
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Assessores" component={SettingsScreen} />
        <Tab.Screen name="Carteira" component={SettingsScreen} />
        <Tab.Screen name="Configurações" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
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
    color: "#120c40"
  },
  home: {
    color: "#120c40",
    textAlign: "center",
    fontSize: 50
  },
  login: {
    backgroundColor: "white",
    padding: 15,
  },
});