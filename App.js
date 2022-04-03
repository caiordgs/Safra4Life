import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ReactNativeSettingsPage, { 
	SectionRow, 
	NavigateRow,
  SwitchRow,
  SliderRow
} from 'react-native-settings-page';
import Login from './screens/Login';
import Cadastro from './screens/Cadastro'
import Hero from './Hero';

const homeImage = { uri: "https://media.discordapp.net/attachments/956541509300269063/959755929732120596/Botao_app_v1_azul.png?width=660&height=660" };

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
    <ReactNativeSettingsPage>
    <SectionRow>
      <NavigateRow
        text='Ver seu perfil completo'
        iconName="fa-regular fa-user" />
      <SwitchRow 
        text='Modo Escuro' 
        iconName='fa-regular fa-moon' />
      <SwitchRow 
        text='Entrada com Biometria'
        iconName='fa-regular fa-fingerprint' />
      <Text style={styles.accessibility}>Acessibilidade</Text>
      <SliderRow 
        text='Tamanho da Fonte'
        iconName='fa-regular fa-font-case'
        _color='#000'
        _min={0}
        _max={100} />
      <SwitchRow 
        text='Texto para fala (Text-to-speech)'
        iconName='fa-solid fa-ear-deaf' />
    </SectionRow>
  </ReactNativeSettingsPage>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
    const [email, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
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
        <Tab.Screen name="Carteira" component={SScreen} />
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